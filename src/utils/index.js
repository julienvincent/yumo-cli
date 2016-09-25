import logger from './logger'
import _ from 'lodash'

export logger from './logger'

export const displayDocument = document => {
    logger(
        logger.c.blue.bold(document.id),
        "",
        ..._.map(document, (value, key) =>
            `${logger.c.dim.white(key)}:${_.reduce(_.range(15 - key.length),
                s => s + " ", "")}${logger.c.reset.green.bold(value)}`
        ),
        ""
    )
}

export * from './config'