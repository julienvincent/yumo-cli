import { command, option } from 'cli-core'
import run, { rethink } from '../rethink'
import _ from 'lodash'
import logger from '../utils/logger'
import { displayDocument, config } from '../utils'

export const list = command("list", "List documents in a table",
    () => ({
        action: () => logger(logger.error("Please specify a table name"))
    }),
    command(":table", "The table to query against",
        ({name}) => {

            logger(logger.success(`Fetching all documents on table '${name}'`), "")

            run(rethink.table(name))
                .then(c => c.toArray())
                .then(res => {
                    _.forEach(res, document => {
                        displayDocument(document)
                    })
                })
                .catch(e => {
                    logger(logger.error("Something went wrong"))
                })

            // connector((thinky, models, done) => {
            // let found = false
            // _.forEach(models, model => {
            //     if (model.getTableName() == name) {
            //         found = true
            //
            //         logger(logger.success(`Fetching all documents on table '${name}'`), "")
            //         model.run().then(documents => {
            //             _.forEach(documents, document => {
            //                 displayDocument(document)
            //             })
            //
            //             done()
            //         })
            //     }
            // })
            //
            // if (!found) {
            //     logger(logger.error(`Couldn't find table ${logger.c.reset.blue(name)} ${logger.error("on database ")} ${logger.c.reset.blue(
            //         process.env.YUMO_DB_NAME
            //     )}`))
            // }
            // })
        }
    )
)

// export const remove = command("remove", "Remove id from table",
//     () => ({
//         action: () => logger(logger.error("Please specify a table name and id"))
//     }),
//     command(":table]", "The table to query against",
//         ({name, args}) => {
//             const id = args[0]
//
//             if (id) {
//                 connector((thinky, models, done) => {
//                     let found = false
//                     _.forEach(models, model => {
//                         if (model.getTableName() == name) {
//                             found = true
//
//                             logger(logger.success(`Deleting document ${id} on table '${name}'`), "")
//                             model.get(id)
//                                 .then(doc => doc.delete().then(done))
//                                 .catch(e => {
//                                     logger(logger.error(`Couldn't find document with id: ${id}`))
//                                     done()
//                                 })
//                         }
//                     })
//
//                     if (!found) {
//                         logger(logger.error(`Couldn't find table ${logger.c.reset.blue(name)} ${logger.error("on database ")} ${logger.c.reset.blue(
//                             process.env.YUMO_DB_NAME
//                         )}`))
//                     }
//                 })
//             } else {
//                 logger(logger.error("Please enter an id"))
//             }
//         }
//     )
// )
//
// export const update = command("update", "Update a field in a table",
//     () => ({
//         action: () => logger(logger.error("Please specify a table name and id"))
//     }),
//     command(':table', "The table to edit a row from",
//         ({name}) => ({payload: name, action: "Please enter an id and a data set (field:newValue)"}),
//         command(":id]", "The document id to mutate",
//             ({name, args, data}) => {
//                 const id = name
//                 const dataSet = args[0].split(":")
//
//                 if (dataSet.length < 2) return logger(logger.error("Incorrect dataset entered"))
//
//                 if (id) {
//                     connector((thinky, models, done) => {
//                         let found = false
//                         _.forEach(models, model => {
//                             if (model.getTableName() == data) {
//                                 found = true
//
//                                 logger(logger.success(`Updating document ${id} on table '${data}' with dataset (${args[0]})`), "")
//                                 model.get(id)
//                                     .then(doc => {
//                                         doc.merge({
//                                             [dataSet[0]]: dataSet[1]
//                                         })
//                                             .save()
//                                             .then(doc => {
//                                                 displayDocument(doc)
//                                                 done()
//                                             })
//                                             .catch(e => {
//                                                 logger(logger.error("Something went wrong while saving document"))
//                                                 done()
//                                             })
//                                     })
//                                     .catch(e => {
//                                         logger(logger.error(`Couldn't find document with id: ${id}`))
//                                         done()
//                                     })
//
//                             }
//                         })
//
//                         if (!found) {
//                             logger(logger.error(`Couldn't find table ${logger.c.reset.blue(data)} ${logger.error("on database ")} ${logger.c.reset.blue(
//                                 process.env.YUMO_DB_NAME
//                             )}`))
//                         }
//                     })
//                 } else {
//                     logger(logger.error("Please enter an id"))
//                 }
//             }
//         )
//     )
// )
//
// export const pushNotification = command("push-notification", "Send a push notification to a user or collection of users",
//     () => ({
//         action: () => logger(logger.error("Please specify an email, id or array of either"))
//     }),
//     command(":identifiers]", "email, id or array of either",
//         ({name, args}) => {
//             const message = args[0]
//
//             if (!message || message == "") return logger(logger.error("No message provided"))
//
//             connector((rethink, {User, Device}, done) => {
//                 let ids = []
//
//                 if (name.substring(0, 1) == "[") {
//                     if (name.substring(name.length - 1) == "]") {
//                         let parsedName = name.substring(1, name.length - 1).replace(" ", "")
//                         ids = parsedName.split(",")
//                     } else {
//                         logger(logger.error("Expected ']'"))
//                         done()
//                     }
//                 } else {
//                     ids.push(name)
//                 }
//
//                 const sendNotification = user => {
//                     const Notification = new PushNotification({devices: user.devices})
//                     Notification.setMessage(message)
//                     Notification.on("done", () => {
//                         logger(logger.success("Notifications sent"))
//                         done()
//                     })
//                     Notification.send()
//                 }
//
//                 _.forEach(ids, id => {
//                     User.get(id)
//                         .getJoin({devices: true})
//                         .then(sendNotification)
//                         .catch(() => {
//                             User.filter(user => user("email").eq(id))
//                                 .getJoin({devices: true})
//                                 .nth(0)
//                                 .default(null)
//                                 .then(user => user && sendNotification(user))
//                                 .catch(done)
//                         })
//                 })
//             })
//         }
//     )
// )