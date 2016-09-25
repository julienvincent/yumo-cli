import { command, option, prompt } from 'cli-core'
import { logger, config, writeConfig } from '../utils'
import _ from 'lodash'

export const addConnection = command("add-connection", "Add a connection to use",
    () => ({action: () => logger(logger.error("Please specify the name of the connection"))}),
    command(":name", "The name of the connection to add",
        ({name}) => {
            const preParsedHost = option("H") || option("host")
            let port = option("P") || option("port")
            const db = option("db") || option("database")
            const password = option("password")

            if (!preParsedHost) return logger(logger.error("No host provided"))
            const parsedHost = preParsedHost.split(":")
            const host = parsedHost[0]

            if (parsedHost[1]) port = parsedHost[1]
            if (!port) port = 28015

            if (_.find(config.connections, connection => connection.name == name)) {
                return logger(logger.error("A connection config with that name already exists"))
            }

            config.connections.push({
                name,
                host,
                port,
                db: db || undefined,
                password: password || undefined
            })

            if (option("use")) config.using = name

            writeConfig(config)
            logger(logger.success(`Successfully added connection with name ${name}`))
        }
    )
)

export const removeConnection = command("remove-connection", "Remove a connection",
    () => ({action: () => logger(logger.error("Please specify a connection to remove"))}),
    command(":name", "The name of the connection to remove",
        ({name}) => {
            _.forEach(config.connections, (connection, i) => {
                if (connection.name == name) {
                    config.connections.splice(i, 1)

                    if (config.using == name) {
                        config.using = null
                    }
                }
            })

            writeConfig(config)
            logger(logger.success(`Successfully removed connection ${name}`))
        }
    )
)

export const useConnection = command("use-connection", "Use a stored connection",
    () => ({action: () => logger(logger.error("Please specify a connection to use"))}),
    command(":name", "The name of the connection to use",
        ({name}) => {
            if (!_.find(config.connections, connection => connection.name == name)) {
                return logger(logger.error("No connection with that name exists."))
            }
            config.using = name

            writeConfig(config)
            logger(logger.success(`Now using connection ${name}`))
        }
    )
)