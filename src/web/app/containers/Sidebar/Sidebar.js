import { Component, createFactory, PropTypes } from 'react'
import { div, p, Loader } from 'ui/components'
import _ from 'lodash'
import styles from './style.pcss'

export default
createFactory(class Sidebar extends Component {

    constructor() {
        super()

        this.state = {}
    }

    render() {
        const {connections, activeConnection, useConnection} = this.props

        return (
            div({className: styles.container},
                div({className: styles.header},
                    p({}, "Connections")
                ),

                div({className: styles.connections},
                    !connections.length ?
                        div({
                                style: {
                                    display: "flex",
                                    justifyContent: "center"
                                }
                            },
                            Loader({scale: 2})
                        ) : null,

                    _.map(connections, ({name}) => (
                            div({
                                    onClick: () => useConnection(name),
                                    key: name,
                                    className: styles.connection + " " + (activeConnection.name == name ? styles.active : null)
                                },
                                p({}, name)
                            )
                        )
                    )
                )
            )
        )
    }
})