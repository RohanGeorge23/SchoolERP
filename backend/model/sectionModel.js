const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')
const classSchema = require('./classModel')

const sectionSchema = sequelize.define('section', {
    section_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    section_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'classes_tills',
        key: 'class_id'
      },
      validate: {
        async isExistingClass(value) {
          const classes = await classSchema.findByPk(value);
          if (!classes) {
            throw new Error('Invalid class_id. Class does not exist.');
          }
        }
      }
    }
  });

classSchema.hasMany(sectionSchema, { foreignKey: 'class_id' });
sectionSchema.belongsTo(classSchema, { foreignKey: 'class_id' });

sectionSchema.sync({alter:true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

module.exports = sectionSchema