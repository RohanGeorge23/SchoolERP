    const { Sequelize, DataTypes } = require('sequelize');
    const {sequelize} = require('../config/db')
    const schoolSchema = require('./schoolDetail')

    const classSchema = sequelize.define('classes_till',{
        class_id:{type: DataTypes.INTEGER ,autoIncrement: true, primaryKey: true},
        class_name: {type: DataTypes.STRING, allowNull: false},
        school_id:{type :DataTypes.STRING,
        references: {
            model: 'schools',
            key: 'school_id'
        },
        allowNull:false,
        validate: {
            async isExistingSchool(value) {
              const school = await schoolSchema.findByPk(value);
              if (!school) {
                throw new Error('Invalid school_id. School does not exist.');
              }
            }
          }
    },
    })


    classSchema.belongsTo(schoolSchema , {foreignKey:'school_id'})

    classSchema.sync().then(()=>{
        console.log('Model updated')
    }).catch((err)=>{
        console.log('scene!',err)
    })

    module.exports = classSchema
