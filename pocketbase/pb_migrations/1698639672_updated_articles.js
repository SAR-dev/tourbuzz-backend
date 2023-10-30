/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cr2sufpg",
    "name": "tags",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  // remove
  collection.schema.removeField("cr2sufpg")

  return dao.saveCollection(collection)
})
