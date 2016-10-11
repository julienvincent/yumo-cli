import { Component, createFactory, PropTypes } from 'react'
import { i } from '../index.js'

const Icon = props => i({...props, ...{className: `icon-${props.name} ${props.className || ''}`}})
Icon.propTypes = {
    name: PropTypes.string.isRequired
}

export default Icon