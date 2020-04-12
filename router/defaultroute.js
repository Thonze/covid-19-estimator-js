const express = require('express')

const defaultController = require('../controller/defaultcontroller')


const router = express.Router()


router.post('/postdata', defaultController.dataPost)
router.get('/getdata', defaultController.getdata)

module.exports = router;