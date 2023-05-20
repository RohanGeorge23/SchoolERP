const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db')


const studentSchema = sequelize.define('student',{
    first_name: DataTypes.STRING, 
    middle_name: DataTypes.STRING,
    last_name:DataTypes.STRING,
    age: DataTypes.INTEGER,
    dob: DataTypes.DATE,
    stu_aadhar_num:DataTypes.INTEGER,
    father_name: DataTypes.STRING,
    mother_name:DataTypes.STRING,
    stu_address:DataTypes.STRING,
    mobile_num:DataTypes.INTEGER,
    whatsapp_num:DataTypes.INTEGER,
    email: DataTypes.STRING,
    religion:DataTypes.STRING,
    caste:DataTypes.STRING,
    sub_caste:DataTypes.STRING,
    minority:DataTypes.BOOLEAN,
    mother_tongue:DataTypes.STRING,
    medium_of_last_School:DataTypes.STRING,
    bus_facility:DataTypes.BOOLEAN
    // bank_details:[{
    //   bank_name:DataTypes.STRING,
    //   bank_location:DataTypes.STRING,
    //   account_INTEGER:DataTypes.INTEGER,
    //   ifsc_code:DataTypes.STRING,    
    // }],
        // parent_gaurdian_detail:[{ 
    //   parent_gaurdian_name:DataTypes.STRING,
    //   relationship_with_student:DataTypes.STRING,
    //   occupation:DataTypes.STRING,
    //   employers_name:DataTypes.STRING,
    //   monthly_income:DataTypes.INTEGER,
    //   email_address:DataTypes.STRING,
    // }],
        // stu_image:DataTypes.STRING,

})

studentSchema.sync({alter : true}).then(()=>{
    console.log('Model updated')
}).catch((err)=>{
    console.log('scene!',err)
})

module.exports = studentSchema

