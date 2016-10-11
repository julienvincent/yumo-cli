#!/usr/bin/env node
import { define, flags, init, setHelpText } from 'cli-core'
import { addConnection, removeConnection, useConnection } from './commands/Config'
import { list } from './commands/Queries'
import { repl } from './commands/REPL'
import { webUI } from './commands/Web'
import 'colors'

setHelpText("Yumo CLI\nUsage: yumodb command [sub-commands] [-,--options]\n")

define(
    addConnection,
    removeConnection,
    useConnection,

    list,

    repl,

    webUI
    // initDB,
    // seed,
    //
    // migrate,
    // undoMigration,
    //
    // list,
    // remove,
    // update,
    // pushNotification
)

flags(
    ['-H,--host', 'Explicitly set the host to connect to.'],
    ['--db,--database', 'The database to use when making queries and mutations. Defaults to \'yumo\''],
    ['-p,--password', 'The password to connect with. Defaults to \'\''],
    ['-d,--dir', 'Directly specify a directory. Used mostly for migrations and seeding.']
)

init()