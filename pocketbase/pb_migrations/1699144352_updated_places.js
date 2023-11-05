/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
