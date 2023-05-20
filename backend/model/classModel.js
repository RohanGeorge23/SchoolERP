const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')
const {schoolSchema} = require('./schoolDetail')

const classSchema = sequelize.define('class',{
    class_id:{type: DataTypes.INTEGER ,autoIncrement: true, primaryKey: true},
    class_till: DataTypes.INTEGER,
    school_id:DataTypes.STRING,
})

classSchema.hasOne(schoolSchema, {
    foreignKey:'school_id',
    allowNull: false
})

schoolSchema.belongsTo(classSchema)

classSchema.sync({alter:true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

