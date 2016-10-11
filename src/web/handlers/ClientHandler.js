// @flow
import { logger, config, writeConfig } from '../../utils'
import { getConnection } from '../../utils'
import createConnection, { rethink } from '../../rethink'
import { transform } from 'babel-core'
import es2015 from 'babel-preset-es2015'
import stage0 from 'babel-preset-stage-0'

type SocketType = {
    on: Function,
    emit: Function
}

export default
class ClientHandler {

    client: SocketType;
    connection;

    constructor(client) {
        this.client = client

        logger("Client Connected")
        this.listen()
        this.makeConnection()
    }

    listen() {
        this.client.on('get_connection', this.getCurrentConnection)
        this.client.on('get_connections', this.getConnections)
        this.client.on('use_connection', this.useConnection)
        this.client.on('connection_status', () => this.client.emit('connection_status', !!this.connection))

        this.client.on('disconnect', () => {
            if (this.connection) this.connection.close()
        })

        this.client.on('run_reql', this.runReql)
    }

    getCurrentConnection = () => {
        this.client.emit('receive_connection', getConnection())
    }

    getConnections = () => {
        this.client.emit('receive_connections', config.connections)
    }

    useConnection = name => {
        let newConfig = {
            ...config,
            using: name
        }

        writeConfig(newConfig)
        this.client.emit('receive_connection', getConnection())
        this.client.emit("connection_status", false)
        this.makeConnection()
    }

    makeConnection = () => {
        createConnection()
            .then(connection => {
                logger("Connection to DB created")
                this.connection = connection
                this.client.emit("connection_status", true)
            })
    }

    runReql = reql => {
        const connection = this.connection
        const r = rethink
        const client = this.client

        function handleResult(error, result) {
            if (error) return client.emit('reql_response', {error: error.toString(), res: null})
            if (typeof result.toArray === 'function') {
                result.toArray()
                    .then(function(res) {
                        client.emit('reql_response', {error, res})
                    })
            } else {
                client.emit('reql_response', {error, res: result})
            }
        }

        try {
            const preParsed = `${reql}.run(connection, handleResult)`
            const {code} = transform(preParsed, {
                presets: [es2015, stage0]
            })

            eval(code)
        } catch (e) {
            handleResult(e, null)
        }
    }
}