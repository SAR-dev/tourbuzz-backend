/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ti8hatmzn4dhtpi",
    "created": "2023-11-03 05:15:44.411Z",
    "updated": "2023-11-03 05:15:44.411Z",
    "name": "accomodations",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "sst5x0uk",
        "name": "details",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ti8hatmzn4dhtpi");

  return dao.deleteCollection(collection);
})
