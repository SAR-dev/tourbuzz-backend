/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ti8hatmzn4dhtpi")

  // remove
  collection.schema.removeField("gcp8wa39")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ti8hatmzn4dhtpi")

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

  return dao.saveCollection(collection)
})
