import { command, option } from 'cli-core'
import connector from '../rethink'
import logger from '../utils/logger'

const initDB = command("init", "Initialize a database",
    () => {
        connector(
            (rethink, models) => {
                const {r} = rethink


            }
        )
    }
)

export { initDB }