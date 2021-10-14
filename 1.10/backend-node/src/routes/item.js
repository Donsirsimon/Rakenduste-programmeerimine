const router = require("express").Router()
const itemController = require("../controllers/item")

router.get("/", itemController.getItems)
router.post("/create", itemController.createItem)
router.put("/update/:id", itemController.updateItem)
router.put("/updateadd1/:id", itemController.updateItemAdd1)
router.delete("/delete/:id", itemController.deleteItem)

module.exports = router