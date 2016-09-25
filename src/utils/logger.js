import chalk from 'chalk'
import _ from 'lodash'

const logger = (...messages) => {
    let formatted = ` ${chalk.dim.bold.black("❯")}${chalk.reset(" ")}`
    const gap = "\n   "

    _.forEach(messages, (message, i) => {
        if (message !== undefined) {
            if (typeof message === 'string') {
                formatted += message.replace(/(\n)+/g, gap)
            } else {
                formatted += message
            }
            if (i != messages.length - 1) formatted += gap
        }
    })

    console.log(formatted)
}

logger.c = chalk

logger.error = chalk.red.bold.dim
logger.warn = chalk.yellow.bold.dim
logger.success = chalk.green.bold.dim

export default logger