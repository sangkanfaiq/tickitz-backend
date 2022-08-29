const express = require("express")
const {getAllCinema, addNewCinema, updateCinema, deleteCinema} = require('../controller/cinemaController')
const router = express.Router()

router.get('/', getAllCinema)
router.post('/', addNewCinema)
router.patch('/:cinemaID', updateCinema)
router.delete('/:cinemaID', deleteCinema)


module.exports = router