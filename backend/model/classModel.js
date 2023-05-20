const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')


const classSchema = sequelize.define('class',{
    class_id: DataTypes.INTEGER, 
    name: DataTypes.STRING,
    school_id:DataTypes.STRING,
})

classSchema.sync({alter:true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

