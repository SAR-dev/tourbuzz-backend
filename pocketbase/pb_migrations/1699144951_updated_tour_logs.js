/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("91gpr7puw4p64m3")

  // remove
  collection.schema.removeField("xwclvmxy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p6mhlji9",
    "name": "hotel",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "c0rzz56ve2c9ivm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
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
    "id": "xwclvmxy",
    "name": "accomodation",
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
  collection.schema.removeField("p6mhlji9")

  return dao.saveCollection(collection)
})
