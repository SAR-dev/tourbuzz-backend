/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ti8hatmzn4dhtpi")

  // remove
  collection.schema.removeField("pfbmt8lp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcp8wa39",
    "name": "level",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vfgovqql",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ti8hatmzn4dhtpi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfbmt8lp",
    "name": "name",
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
  collection.schema.removeField("gcp8wa39")

  // remove
  collection.schema.removeField("vfgovqql")

  return dao.saveCollection(collection)
})
