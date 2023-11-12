/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  // remove
  collection.schema.removeField("x0xdkwdg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l9yohxu3",
    "name": "details",
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
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x0xdkwdg",
    "name": "details",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("l9yohxu3")

  return dao.saveCollection(collection)
})
