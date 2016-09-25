import { command, option } from 'cli-core'
import connector from '../rethink'
import logger from '../utils/logger'
import path from 'path'
import fs from 'fs'
import _ from 'lodash'

const Seeder = done => {
    const seedDir = path.join(__dirname, '../../../database/seeds')
    const seeds = _.map(_.filter(fs.readdirSync(seedDir), file => file.substring(0, 1) !== "."), file => file.replace(".js", ""))

    const seedNext = (seeds, index = 0, done, parent) => {
        const seederName = seeds[index]
        const seeder = parent ? seederName : require(path.join(seedDir, seederName)).default

        const nextOrFinish = () => {
            if (index == seeds.length - 1) {
                done()
            } else {
                seedNext(seeds, index + 1, done, parent)
            }
        }

        if (Array.isArray(seeder)) {
            logger(logger.c.blue.bold(`SEEDING ${seederName.toUpperCase()}`))
            seedNext(seeder, 0, nextOrFinish, seederName)
        } else {
            logger(logger.c.blue.bold(
                parent ? logger.c.dim(`  ${`${parent} #${index}`.toUpperCase()}`) : `SEEDING ${seederName.toUpperCase()}`
            ))
            seeder(() => {
                logger(logger.c.magenta.bold(
                    parent ? logger.c.dim('    DONE') : '  DONE'
                ))
                nextOrFinish()
            })
        }
    }

    seedNext(seeds, 0, () => {
        logger(logger.success("SEED COMPLETE"))
        done()
    })
}

export const initDB = command("init", "Initialize a database's tables and call all migrations and seeds",
    () => {
        connector(
            (rethink, models) => {


            }
        )
    }
)

export const seed = command("seed", "Seed a database",
    () => connector(
        ({}, {}, done) => {
            Seeder(done)
        }
    )
)