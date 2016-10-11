import { Component, createFactory, PropTypes } from 'react'
import { div } from 'ui/components'
import io from 'socket.io-client'
import _ from 'lodash'
import styles from './style.pcss'

import Sidebar from './Sidebar/Sidebar'
import Repl from './Repl/Repl'

export default
createFactory(class Index extends Component {

    socket;

    constructor() {
        super()

        this.state = {
            connected: false,
            connections: [],
            active: null
        }

        this.socket = io('http://localhost:2000')
    }

    componentWillMount() {
        this.socket.on('connection_status', connected => this.setState({connected}))

        this.socket.on('connect', () => {
            this.socket.emit('get_connection')
            this.socket.emit('get_connections')
        })

        this.socket.on('receive_connection', connection => this.addConnections(connection))
        this.socket.on('receive_connections', connection => this.addConnections(connection))
    }

    addConnections = connections => {
        if (!Array.isArray(connections)) {
            this.setState({
                active: connections.name
            })
        } else {
            this.setState({
                connections: [
                    ..._.filter(this.state.connections, connection => !_.find(connections, con => con.name == connection.name)),
                    ...connections
                ]
            })
        }
    }

    useConnection = name => {
        this.setState({
            connected: false
        })
        this.socket.emit('use_connection', name)
    }

    render() {
        const {connections, connected, active} = this.state

        const activeConnection = _.find(connections, connection => connection.name == active)

        return (
            div({className: styles.container},
                Sidebar({useConnection: this.useConnection, connections, activeConnection}),
                Repl({socket: this.socket, activeConnection, connections, connected})
            )
        )
    }
})