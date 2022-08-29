const express = require("express")
const {getAllCategories, addNewCategories, updateCategories, deleteCategories} = require('../controller/categoriesController')
const router = express.Router()

router.get('/', getAllCategories)
router.post('/', addNewCategories)
router.patch('/:categoryID', updateCategories)
router.delete('/:categoryID', deleteCategories)


module.exports = router