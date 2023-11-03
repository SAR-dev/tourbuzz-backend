/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nb3p16qg",
    "name": "accomodation",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ti8hatmzn4dhtpi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oa9mgyu9gmu03rd")

  // remove
  collection.schema.removeField("nb3p16qg")

  return dao.saveCollection(collection)
})
