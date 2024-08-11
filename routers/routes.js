

const express = require('express')

const postController = require("../controller/PostController")
const router = express.Router()


router.get("/", postController.getAllPost)
router.post("/create", postController.createPost)


module.exports = router;