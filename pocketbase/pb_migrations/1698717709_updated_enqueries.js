/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydfmob7b",
    "name": "contact_number",
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
  const collection = dao.findCollectionByNameOrId("kp0k9unbt093ou8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ydfmob7b",
    "name": "contact_number",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^\\+?[1-9][0-9]{7,14}$"
    }
  }))

  return dao.saveCollection(collection)
})
