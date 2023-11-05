/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c0rzz56ve2c9ivm",
    "created": "2023-11-05 00:38:52.524Z",
    "updated": "2023-11-05 00:38:52.524Z",
    "name": "hotels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ynunpfyh",
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
        "id": "noso1kjn",
        "name": "map_link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_PXJWqKj` ON `hotels` (`name`)"
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
  const collection = dao.findCollectionByNameOrId("c0rzz56ve2c9ivm");

  return dao.deleteCollection(collection);
})
