/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwohimqd",
    "name": "email",
    "type": "email",
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
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // remove
  collection.schema.removeField("wwohimqd")

  return dao.saveCollection(collection)
})
