/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cddkfxdi",
    "name": "tour_type",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nfj69z15l0v148i",
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

  // remove
  collection.schema.removeField("cddkfxdi")

  return dao.saveCollection(collection)
})
