/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fj7hht9tobs34ac")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vm8je6tt",
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
  const collection = dao.findCollectionByNameOrId("fj7hht9tobs34ac")

  // remove
  collection.schema.removeField("vm8je6tt")

  return dao.saveCollection(collection)
})
