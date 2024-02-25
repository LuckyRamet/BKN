const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const userController = require('../controllers/user-controller')

router.get('/infomation',authenticate, userController.getByUser)


module.exports = router