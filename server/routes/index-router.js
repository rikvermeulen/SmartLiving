const express = require('express')

const IndexCtrl = require('../controllers/index-ctrl')

const router = express.Router()

router.post('/user', IndexCtrl.createUser)
router.put('/user/:id', IndexCtrl.updateUser)
router.delete('/user/:id', IndexCtrl.deleteUser)
router.get('/user/:id', IndexCtrl.getUserById)
router.get('/users', IndexCtrl.getUsers)

module.exports = router