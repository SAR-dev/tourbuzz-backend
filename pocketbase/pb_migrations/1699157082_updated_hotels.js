/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0rzz56ve2c9ivm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwslvwqo",
    "name": "reciew",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c0rzz56ve2c9ivm")

  // remove
  collection.schema.removeField("xwslvwqo")

  return dao.saveCollection(collection)
})
