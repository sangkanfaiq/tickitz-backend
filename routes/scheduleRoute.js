const express = require("express")
const {getAllSchedule, addNewSchedule, updateSchedule, deleteSchedule } = require('../controller/scheduleController')
const router = express.Router()

router.get('/', getAllSchedule)
router.post('/', addNewSchedule)
router.patch('/:scheduleID', updateSchedule)
router.delete('/:scheduleID', deleteSchedule)



module.exports = router
