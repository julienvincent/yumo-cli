import { render } from 'react-dom'
// import { devtools } from 'jspm-devtools/dist/client'
import 'react-hot-loader/patch'

import Index from './containers/Index.js'

// devtools()
console.error = (() => exception => {
    if (exception && typeof exception === 'string' && exception.match(/change <Router /)) {
        console.error.apply(console, arguments)
    }
})()
console.warn = (() => (exception) => {
    if (exception && typeof exception === 'string' && !exception.match(/Styles lookup at key:/)) {
        console.warn.apply(console, arguments)
    }
})()

render(Index(), document.getElementById('root'))