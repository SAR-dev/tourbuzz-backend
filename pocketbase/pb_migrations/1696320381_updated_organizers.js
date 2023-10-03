/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v6eqtx5b5dkair")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_unique_username_on_organizers` ON `organizers` (`username`)",
    "CREATE UNIQUE INDEX `idx_unique_email_on_organizers` ON `organizers` (`email`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xfyegtlx",
    "name": "username",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^[a-z0-9_-]{3,15}$"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gd2q7c12",
    "name": "email",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1gwvtwhw",
    "name": "contact_number",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "/^\\+?[1-9][0-9]{7,14}$/"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3v6eqtx5b5dkair")

  collection.indexes = []

  // remove
  collection.schema.removeField("xfyegtlx")

  // remove
  collection.schema.removeField("gd2q7c12")

  // remove
  collection.schema.removeField("1gwvtwhw")

  return dao.saveCollection(collection)
})
