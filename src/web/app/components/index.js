import { createFactory, DOM } from 'react'
import { TransitionMotion as rtm, Motion as rm, StaggeredMotion as rsm } from 'react-motion'

/**
 * HTML Elements
 */

export const a = createFactory('a')
export const p = createFactory('p')
export const i = createFactory('i')
export const div = createFactory('div')
export const img = createFactory('img')
export const form = createFactory('form')
export const text = createFactory('text')
export const span = createFactory('span')
export const pre = createFactory('pre')
export const input = createFactory('input')
export const select = createFactory('select')
export const textarea = createFactory('textarea')
export const button = createFactory('button')
export const option = createFactory('option')
export const br = createFactory('br')
export const ul = createFactory('ul')
export const li = createFactory('li')

/**
 * Components
 */

export Icon from './Icon/Icon.js'
export Loader from './Loader/Loader.js'

/**
 * Wrappers
 */

export const
    TransitionMotion = createFactory(rtm),
    Motion = createFactory(rm),
    StaggeredMotion = createFactory(rsm)