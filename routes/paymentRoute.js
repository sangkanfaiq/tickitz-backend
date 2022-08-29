const express = require("express")
const {getAllPayment, addNewPayment, updatePayment, deletePayment} = require('../controller/paymentController')
const router = express.Router()

router.get('/', getAllPayment)
router.post('/', addNewPayment)
router.patch('/:PaymentID', updatePayment)
router.delete('/:PaymentID', deletePayment)



module.exports = router
