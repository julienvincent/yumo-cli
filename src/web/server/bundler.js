import fs from 'fs-extra'
import jspm from 'jspm'
import { join } from 'path'

fs.mkdir('build')

const Builder = new jspm.Builder()

Builder
    .bundle('app/app.js', 'build/bundle.js', {
        minify: true,
        mangle: true,
    })
    .then(function() {
        console.log('Finished JS')

        fs.copy(join(__dirname, 'index.html'), join(__dirname, '../../../lib/web/server/index.html'))
        fs.copy(join(__dirname, '../build'), join(__dirname, '../../../lib/web/build'))
        fs.copy(join(__dirname, '../jspm_packages'), join(__dirname, '../../../lib/web/jspm_packages'))
        fs.copy(join(__dirname, '../resources'), join(__dirname, '../../../lib/web/resources'))
    })