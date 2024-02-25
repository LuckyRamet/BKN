const express = require('express')
const router = express.Router()
const reservedController = require('../controllers/reserved-controller')
const authenticate = require('../middlewares/authenticate')
router.get("/show", authenticate, reservedController.showBooking)
router.get("/admin/show", authenticate, reservedController.adminShowBooking)
router.post("/creacte", reservedController.creacteBooking)
router.delete("/delete/:bookingId", reservedController.deleteRerved)

module.exports = router