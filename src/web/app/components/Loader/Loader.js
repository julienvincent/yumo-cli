import { Component, createFactory, PropTypes } from 'react'
import { div } from 'ui/components'
import styles from './style.pcss'

export default
createFactory(class Loader extends Component {
    render() {
        const {scale = 1} = this.props

        const dimensions = 10 * scale

        return (
            div({className: styles.loader, style: {
                width: dimensions,
                height: dimensions
            }})
        )
    }
})