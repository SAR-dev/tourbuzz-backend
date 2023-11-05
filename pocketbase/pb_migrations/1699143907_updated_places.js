/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xky6tk11",
    "name": "division",
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
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xky6tk11",
    "name": "district",
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
})
