// @flow
import fs from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import _ from 'lodash'

const configDir: String = join(homedir(), '.yumo')
const configFile: String = join(homedir(), '.yumo/config.json')

type ConnectionType = {
    name: String,
    host: String,
    port: Number,
    password: ?String,
    database: ?String
}

type ConfigType = {
    connections: Array<ConnectionType>,
    using: ?String,
    apiDir: ?String
}

let config: ConfigType = {
    connections: [],
    using: null,

    apiDir: null
}

try {
    fs.accessSync(configFile, fs.F_OK)

    try {
        config = {
            ...config,
            ...JSON.parse(fs.readFileSync(configFile))
        }
    } catch (e) {
        // ignore
    }
} catch (e) {
    // File doesn't exist
}

export { config }

export const writeConfig: Function = (changes: ConfigType): Boolean => {
    let newConfig: ConfigType = {
        ...config,
        ...changes
    }

    try {
        if (!fs.existsSync(configDir)) fs.mkdirSync(configDir)

        fs.writeFileSync(configFile, JSON.stringify(newConfig, null, 3))

        return true
    } catch (e) {
        return false
    }
}

export const getConnection: Function = (): ConnectionType => {
    return _.find(config.connections, ({name}) => name == config.using)
}