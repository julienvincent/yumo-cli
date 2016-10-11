import express from 'express'
import compression from 'compression'
import { join } from 'path'
import { make } from 'jspm-devtools'
import { logger } from '../../utils'
import http from 'http'
import io from 'socket.io'

import ClientHandler from '../handlers/ClientHandler'

const app = express()

app.use(compression())
const server = http.createServer(app)
const socket = io(server)

socket.on('connect', client => new ClientHandler(client))

app.use('/', express.static(join(__dirname, '../'), {
    dotfiles: 'allow'
}))

app.get("*", (req, res) => res.sendFile((join(__dirname, 'index.html'))))

export default (dev) => {
    if (dev) {
        const {handler} = make({
            packagePath: join(__dirname, '../'),
            entries: ['app/app.js'],
            hmr: true,
            resolveHandler: ({req, resolvers: {bundle, next}}) =>
                req.originalUrl.endsWith("dependencies.js") ? bundle({expression: "app/app.js"}) : next()
        })

        app.use("*", handler)
    }
    server.listen(2000, () => logger(logger.success("Running UI on port 2000")))
}