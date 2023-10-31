/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  collection.createRule = "@request.auth.id != null"

  return dao.saveCollection(collection)
})
