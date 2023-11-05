/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // remove
  collection.schema.removeField("ohwep3p7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcpwhnur",
    "name": "map_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohwep3p7",
    "name": "map_link",
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
  collection.schema.removeField("fcpwhnur")

  return dao.saveCollection(collection)
})
