/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lx5n58lw59csn2e");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "lx5n58lw59csn2e",
    "created": "2023-11-05 00:33:48.535Z",
    "updated": "2023-11-05 00:33:48.535Z",
    "name": "accomodation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "swhwzpfj",
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
        "id": "zrdu2utv",
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
})
