/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3v6eqtx5b5dkair",
    "created": "2023-10-03 07:36:12.400Z",
    "updated": "2023-10-03 07:36:12.400Z",
    "name": "organizers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0dz7oqjm",
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
        "id": "ssimehs3",
        "name": "social_link",
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
  const collection = dao.findCollectionByNameOrId("3v6eqtx5b5dkair");

  return dao.deleteCollection(collection);
})
