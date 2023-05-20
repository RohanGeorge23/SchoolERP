const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')


const schoolSchema = sequelize.define('school',{
    school_id:{type: DataTypes.INTEGER ,autoIncrement: true, primaryKey: true},
    name: {type:DataTypes.STRING, allowNull: false}, 
    address: {type :DataTypes.STRING, allowNull: false},
    board:{ type :DataTypes.STRING, allowNull:false}
})

schoolSchema.sync({alter:true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

module.exports = schoolSchema