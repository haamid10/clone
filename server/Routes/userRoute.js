const express = require("express")
const router = express.Router()
const userController = require('../controlers/userControlers')



router.route('/:id/comment')
.post(userController.addComment)
.delete(userController.removeComment);

router.route('/:id/comment/:id').put(userController.updateComment)

router.route("/:id")
.delete(userController.delete)
.get(userController.get)

router.route('/').get(userController.getAll).post(userController.AddBlog)
module.exports = router;