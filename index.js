const express = require('express')
const cors = require('cors')
const {testDbConnection} =require('./config/db')
require('./model/studentModel')
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
  res.send('You Lit Bruhh')
})
// Custom Routes
app.use('/student',stu)


app.all('*',(req,res)=>{
  res.send('Incorrect Endpoint!')
})



app.listen(7000, () => {
  console.log(`Listening to Port http://localhost:7000`)
})