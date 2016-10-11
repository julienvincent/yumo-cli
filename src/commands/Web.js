import { command, option, prompt } from 'cli-core'
import web from '../web/server/server'

export const webUI = command('web', "Start a simple web interface",
    () => web()
)
