import { command, option, prompt } from 'cli-core'
import run from '../rethink'
import logger from '../utils/logger'
import rethink from 'rethinkdb'

const clear = command("clear", "Clear a table in the database",
    () => "Please specify a table name",
    command(":table", "The name of the table to clear",
        ({name}) => {
            run(rethink.table(name).delete())
        }
    )
)

export { clear }