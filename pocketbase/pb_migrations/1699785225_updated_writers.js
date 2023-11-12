/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cg4l2cmbw7b7jop")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6ous3kl",
    "name": "intro",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 500,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cg4l2cmbw7b7jop")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6ous3kl",
    "name": "intro",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 300,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
