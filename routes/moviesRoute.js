const express = require("express")
const {getAllMovies, addNewMovies, updateMovies, deleteMovies, getMoviesById} = require('../controller/moviesController')
const router = express.Router()
const upload = require('../helper/multer')
const verifyAuth = require("../helper/verifyAuth")

router.get('/', getAllMovies)
router.get('/:movieID', getMoviesById)
router.post('/', verifyAuth, upload, addNewMovies)
router.patch('/:movieID', verifyAuth, upload, updateMovies)
router.delete('/:movieID', deleteMovies)



module.exports = router
