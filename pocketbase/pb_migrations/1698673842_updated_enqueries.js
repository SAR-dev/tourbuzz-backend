/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pskp0qts",
    "name": "answer",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // remove
  collection.schema.removeField("pskp0qts")

  return dao.saveCollection(collection)
})
