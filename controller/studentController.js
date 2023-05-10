const studentSchema = require('../model/studentModel');

const allStudents = async (req, res) => {
  try {
    const allStu = await studentSchema.findAll()
    res.send(allStu)

  } catch (error) {
    res.send({ 'err': 400, 'error': error })
  }
}

const createStudent = async (req, res) => {

  let data = req.body
  try {

    const insertStuData = await studentSchema.create({
      first_name: data.first_name, 
      middle_name: data.middle_name, 
      last_name:data.last_name,
      age: data.age,
      dob:data.dob,
      stu_aadhar_num:data.stu_aadhar_num, 
      father_name:data.father_name ,
      mother_name:data.mother_name,
      stu_address:data.stu_address,
      mobile_num:data.mobile_num,
      whatsapp_num:data.whatsapp_num,
      email: data.email,
      religion:data.religion,
      caste:data.caste,
      sub_caste:data.sub_caste,
      minority:data.minority,
      mother_tongue:data.mother_tongue,
      medium_of_last_School:data.medium_of_last_School,
      bus_facility:data.bus_facility
    })
    const savedData = await insertStuData.save()
    res.send({ 'status': 200, 'data': savedData })

  } catch (error) {
    console.log(error)
    res.send({ 'status': 400, 'error': error })
  }
}

module.exports = { allStudents, createStudent }