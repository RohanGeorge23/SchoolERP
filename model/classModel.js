const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')


const classSchema = sequelize.define('class',{
    class_id: DataTypes.STRING, 
    middle_name: DataTypes.STRING,
    last_name:DataTypes.STRING,
})

studentSchema.sync({alter:true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

