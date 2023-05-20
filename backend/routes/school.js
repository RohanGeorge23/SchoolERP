const express = require('express')
const router = express.Router()

const createSchool = require('../controller/schoolController')

router.post('/create-school',createSchool)
module.exports = router