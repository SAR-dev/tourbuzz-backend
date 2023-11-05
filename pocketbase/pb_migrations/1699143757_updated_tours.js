/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // remove
  collection.schema.removeField("hsqoqsu4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lgjfqyuj",
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
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsqoqsu4",
    "name": "places",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 80,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("lgjfqyuj")

  return dao.saveCollection(collection)
})
