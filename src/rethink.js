import { option } from 'cli-core'
import logger from './utils/logger'
import rethink from 'rethinkdb'
import { getConnection } from './utils'

export default ({query, connection} = {}) => {
    const connectionInfo = connection || getConnection()
    connectionInfo.password = option("password") || connectionInfo.password

    logger(
        "Attempting to connect to RethinkDB using the following connection information:",
        `\n${logger.c.dim("HOST:\t")} ${logger.c.reset(connectionInfo.host)}:${connectionInfo.port}`,
        `${logger.c.dim("PASSWORD:\t")} ${logger.c.reset(connectionInfo.password || "NONE")}`,
        `${logger.c.dim("DATABASE:\t")} ${logger.c.reset(connectionInfo.db || "test")}`,
        ""
    )

    return new Promise((resolve, reject) => {
        rethink.connect(connectionInfo, (err, connection) => {
            if (err) {
                if (err.message == "Wrong password") {
                    logger(logger.error("Incorrect password"))
                } else {
                    logger(logger.error("Could not establish a connection"))
                }
                if (query) {
                    process.exit(0)
                } else {
                    return
                }
            }

            if (query) {
                query.run(connection, (err, res) => {
                    if (err) {
                        connection.close()
                        return reject(err)
                    }

                    resolve(res)
                    connection.close()
                })
            } else {
                resolve(connection)
            }
        })
    })
}

export { rethink }