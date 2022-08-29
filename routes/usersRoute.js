const express = require("express")
const {getAllUsers, addNewUsers, updateUsers, deleteUsers } = require('../controller/usersController')
const router = express.Router()

router.get('/', getAllUsers)
router.post('/', addNewUsers)
router.patch('/:userID', updateUsers)
router.delete('/:userID', deleteUsers)


module.exports = router
