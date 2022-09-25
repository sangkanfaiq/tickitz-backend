const express = require("express")
const {getAllBooking, getBookingById, addNewBooking, updateBooking, deleteBooking } = require('../controller/bookingController')
const router = express.Router()

router.get('/', getAllBooking)
router.get('/:bookingID', getBookingById)
router.post('/', addNewBooking)
router.patch('/:bookingID', updateBooking)
router.delete('/:bookingID', deleteBooking)


module.exports = router
