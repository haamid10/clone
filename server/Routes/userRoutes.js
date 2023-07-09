const express = require("express")
const router = express.Router()
const userController = require('../controlers/userControlers')


router.post('/signup', userController.signup)
router.get('/',userController.getAll)

module.exports = router;