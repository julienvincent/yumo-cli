import { command, option } from 'cli-core'
import fs from 'fs'
import connector from '../rethink'
import logger from '../utils/logger'

export const migrate = command("migrate", "Run all pending migrations against the database.",
    () => {

    }
)

export const undoMigration = command("migrate:undo", "Undo the last migration made to the database.",
    () => ({
        action: () => {

        }
    }),

    command("all", "Undo all migrations made to the database.")
)