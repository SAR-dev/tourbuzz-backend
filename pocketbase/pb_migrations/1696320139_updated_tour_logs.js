/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("91gpr7puw4p64m3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_unique_tour_date_on_tour_logs` ON `tour_logs` (\n  `tour`,\n  `date`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("91gpr7puw4p64m3")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_tour_date_on_tour_logs` ON `tour_logs` (\n  `tour`,\n  `date`\n)"
  ]

  return dao.saveCollection(collection)
})
