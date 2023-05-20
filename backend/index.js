const express = require('express')
const cors = require('cors')
const {testDbConnection} =require('./config/db')
require('./model/schoolDetail')
require('./model/studentModel')

const school = require('./routes/school')
const stu = require('./routes/student')
const app = express()

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Cors Policy
app.use(cors())
// JSON
app.use(express.json())
// Connect DB
testDbConnection()


app.get('/',(req,res)=>{
  res.send('Health Check : Working : 200')
})
// Custom Routes
app.use('/school',school)
app.use('/student',stu)


app.all('*',(req,res)=>{
  res.send('Incorrect Endpoint!')
})



app.listen(7000, () => {
  console.log(`Listening to Port http://localhost:7000`)
})