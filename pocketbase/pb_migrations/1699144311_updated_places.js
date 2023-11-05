/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvhkh7ld",
    "name": "division",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Barishal",
        "Chattogram",
        "Dhaka",
        "Khulna",
        "Rajshahi",
        "Rangpur",
        "Mymensingh",
        "Sylhet"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvhkh7ld",
    "name": "division",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Barishal",
        "Chattogram",
        "Dhaka",
        "Khulna",
        "Rajshahi",
        "Rangpur",
        "Mymensingh and Sylhet"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
