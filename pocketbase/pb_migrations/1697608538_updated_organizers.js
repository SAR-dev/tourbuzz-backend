/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v6eqtx5b5dkair")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gwvtwhw",
    "name": "contact_number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^\\+?[1-9][0-9]{7,14}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v6eqtx5b5dkair")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gwvtwhw",
    "name": "contact_number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "/^\\+?[1-9][0-9]{7,14}$/"
    }
  }))

  return dao.saveCollection(collection)
})
