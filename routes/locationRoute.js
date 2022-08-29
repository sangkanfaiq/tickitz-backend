const express = require("express")
const {getAllLocation, addNewLocation, updateLocation, deleteLocation} = require('../controller/locationController')
const router = express.Router()

router.get('/', getAllLocation)
router.post('/', addNewLocation)
router.patch('/:locationID', updateLocation)
router.delete('/:locationID', deleteLocation)


module.exports = router