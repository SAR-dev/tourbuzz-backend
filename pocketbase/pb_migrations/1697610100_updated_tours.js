/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // remove
  collection.schema.removeField("ofpzmzri")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stjakyro",
    "name": "description",
    "type": "editor",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5umowvn",
    "name": "date_from",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykkeshob",
    "name": "date_to",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ofpzmzri",
    "name": "description",
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
  collection.schema.removeField("stjakyro")

  // remove
  collection.schema.removeField("c5umowvn")

  // remove
  collection.schema.removeField("ykkeshob")

  return dao.saveCollection(collection)
})
