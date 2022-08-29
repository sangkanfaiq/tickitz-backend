const express = require("express")
const {getAllPaymentMethod, addNewPaymentMethod, updatePaymentMethod, deletePaymentMethod} = require('../controller/paymentMethodController')
const router = express.Router()

router.get('/', getAllPaymentMethod)
router.post('/', addNewPaymentMethod)
router.patch('/:paymentMethodID', updatePaymentMethod)
router.delete('/:paymentMethodID', deletePaymentMethod)



module.exports = router
