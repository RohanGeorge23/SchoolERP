const express = require('express')
const router = express.Router()
const {allStudents,createStudent} = require('../controller/studentController')


router.get('/all-student',allStudents)
router.post('/create-student',createStudent)

module.exports = router