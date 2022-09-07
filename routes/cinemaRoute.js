const express = require("express")
const {getAllCinema, addNewCinema, updateCinema, deleteCinema} = require('../controller/cinemaController')
const router = express.Router()
const upload = require('../helper/multer')

router.get('/', getAllCinema)
router.post('/', upload, addNewCinema)
router.patch('/:cinemaID', upload, updateCinema)
router.delete('/:cinemaID', deleteCinema)


module.exports = router