/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("91gpr7puw4p64m3")

  // remove
  collection.schema.removeField("ou7itn6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwz7tliz",
    "name": "places",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3rwu5dgzg9qtpg2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("91gpr7puw4p64m3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ou7itn6b",
    "name": "places",
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

  // remove
  collection.schema.removeField("lwz7tliz")

  return dao.saveCollection(collection)
})
