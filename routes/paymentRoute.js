const express = require("express")
const {getAllPayment, addNewPayment, updatePayment, deletePayment, getPaymentById} = require('../controller/paymentController')
const router = express.Router()

router.get('/', getAllPayment)
router.get('/:paymentID', getPaymentById)
router.post('/', addNewPayment)
router.patch('/:PaymentID', updatePayment)
router.delete('/:PaymentID', deletePayment)



module.exports = router
