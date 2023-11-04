/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nfj69z15l0v148i",
    "created": "2023-11-03 08:23:58.720Z",
    "updated": "2023-11-03 08:23:58.720Z",
    "name": "tour_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jm8gbo61",
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
        "id": "vsgw1pfw",
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
  const collection = dao.findCollectionByNameOrId("nfj69z15l0v148i");

  return dao.deleteCollection(collection);
})
