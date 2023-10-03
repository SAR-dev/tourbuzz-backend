/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1y95lwl3maweyol")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_unique_bkash_trx_id_on_tickets` ON `tickets` (`bkash_trx_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1y95lwl3maweyol")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_bkash_trx_id_on_tickets` ON `tickets` (`bkash_trx_id`)"
  ]

  return dao.saveCollection(collection)
})
