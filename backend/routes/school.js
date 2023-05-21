const express = require('express')
const router = express.Router()

const createSchool = require('../controller/schoolController')
const createClass = require('../controller/classController')
const createSection = require('../controller/sectionController')


// Step -1 : Create School
router.post('/create-school',createSchool)
// Step -2 : Create Class for the school
router.post('/add-class',createClass)
// Step -3 : Add Section for Each class
router.post('/add-section',createSection)

module.exports = router