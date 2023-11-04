/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldfjxnhz",
    "name": "instruction",
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
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ldfjxnhz",
    "name": "pickup_details",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
