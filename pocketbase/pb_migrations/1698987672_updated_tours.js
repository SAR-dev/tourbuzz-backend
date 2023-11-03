/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmgvbl7z",
    "name": "verification",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fj7hht9tobs34ac",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fmgvbl7z",
    "name": "verification",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fj7hht9tobs34ac",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
