const router = require("express").Router()
const postController = require("../controllers/post")

router.get("/", postController.getPosts)
router.post("/postcreate", postController.createPost)
router.put("/update/:id", postController.updatePost)
router.delete("/delete/:id", postController.deletePost)

module.exports = router