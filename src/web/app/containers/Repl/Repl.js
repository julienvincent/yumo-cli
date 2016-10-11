import { Component, createFactory, PropTypes } from 'react'
import { div, textarea, Icon, pre, p, Loader } from 'ui/components'
import styles from './style.pcss'

export default
createFactory(class Repl extends Component {

    constructor() {
        super()

        this.state = {
            reql: localStorage.getItem("last_command") || "",
            disabled: false,
            response: {}
        }
    }

    componentWillMount() {
        this.props.socket.on('reql_response', this.handleReqlResponse)
    }

    componentDidMount() {
        this.refs.input.focus()
    }

    handleReqlResponse = response => {
        this.setState({
            disabled: false,
            response
        })
    }

    handleKey = e => {
        if (e.key == "Enter") {
            if (e.shiftKey) {
                e.preventDefault()
                this.submit()
            }
        }

        if (e.key == 'Tab') {
            e.preventDefault()

            const component = this.refs.input
            const selection = getSelection()

            const start = selection.baseOffset
            const end = selection.focusOffset

            const base = end > start ? start : end
            const offset = end > start ? end : start

            const text = component.innerText
            const before = text.substring(0, base)
            const after = text.substring(offset, text.length)

            this.setState({
                reql: `${before}    ${after}`
            }, () => {
                const range = document.createRange()
                range.setStart(component.firstChild, before.length + 4)
                selection.removeAllRanges()
                selection.addRange(range)
            })
        }
    }

    submit = () => {
        if (!this.state.disabled && this.props.connected) {
            localStorage.setItem("last_command", this.state.reql)
            this.props.socket.emit('run_reql', this.state.reql)
            this.setState({
                disabled: true
            })
        }
    }

    parse(content) {
        if (!content) return null
        return JSON.stringify(content, null, 2).replace(/\"([^(\")"]+)\":/g, "$1:")
    }

    render() {
        const {reql, response} = this.state
        const {activeConnection = {}, connected} = this.props

        const disabled = !connected || this.state.disabled

        return (
            div({className: styles.container},
                div({className: styles.header},
                    p({}, `${activeConnection.name} [${activeConnection.db}]`),

                    connected ?
                    div({className: styles.right},
                        p({}, "connected"),
                        div({className: styles.status})
                    ) : Loader({scale: 2})
                ),

                div({className: styles["input-container"]},
                    div({
                        ref: "input",
                        className: styles.input,
                        contentEditable: true,
                        onKeyDown: this.handleKey,
                        onInput: e => this.setState({reql: e.target.innerText}),
                        dangerouslySetInnerHTML: {
                            __html: reql
                        }
                    }),
                    Icon({name: "send", onClick: this.submit, className: disabled ? styles.disabled : null})
                ),

                div({className: styles.content},
                    disabled && connected ? div({style: {display: "flex", justifyContent: "center"}},
                        Loader({scale: 3})
                    ) : null,

                    response.error ?
                        pre({className: styles.error},
                            this.parse(response.error)
                        ) : null,

                    pre({},
                        this.parse(response.res)
                    )
                )
            )
        )
    }
})