import { homedir } from 'os'
import { join } from 'path'
import { command, option, prompt } from 'cli-core'
import runCommand, { rethink as r } from '../rethink'
import _ from 'lodash'
import logger from '../utils/logger'
import { displayDocument, config } from '../utils'
import { transform } from 'babel-core'

export const repl = command('repl', "Start a super simple repl",
    () => {
        const runRepl = () => {
            prompt(logger.c.blue.bold(" ❯"), (e, query) => {
                if (e) {
                    console.log(e)
                    return logger(logger.error("Something went wrong"))
                }

                const run = runCommand
                const rethink = r
                var display = displayDocument

                const preParsed = `
                                    run(${query})
                                        .then(res => res.toArray())
                                        .then(res => {
                                            res.forEach(doc => display(doc))
                                            runRepl()
                                        })
                                    `

                const {code} = transform(preParsed, {
                    presets: ["es2015", "stage-0"]
                })
                eval(code)
            })
        }
        runRepl()
    }
)