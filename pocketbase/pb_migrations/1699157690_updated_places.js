/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // remove
  collection.schema.removeField("cq47xzke")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5byqsrkp",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 20,
      "maxSize": 2097152,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cq47xzke",
    "name": "review",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("5byqsrkp")

  return dao.saveCollection(collection)
})
