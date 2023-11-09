/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_za5glVd` ON `articles` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4mlftbu0z4d6jo")

  collection.indexes = []

  return dao.saveCollection(collection)
})
