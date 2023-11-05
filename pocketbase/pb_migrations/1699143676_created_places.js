/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3rwu5dgzg9qtpg2",
    "created": "2023-11-05 00:21:16.666Z",
    "updated": "2023-11-05 00:21:16.666Z",
    "name": "places",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cjgsqctb",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xky6tk11",
        "name": "district",
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
      },
      {
        "system": false,
        "id": "yno9lfoc",
        "name": "images",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 10,
          "maxSize": 2097152,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_dFLcO58` ON `places` (`name`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("3rwu5dgzg9qtpg2");

  return dao.deleteCollection(collection);
})
