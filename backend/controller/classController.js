const classSchema = require('../model/classModel')

const createClass = async(req,res)=>{
    let data = req.body
    console.log('checkkkkk work!!')
    try {
        const insertClass= await classSchema.create({
            class_name:data.class_name,
            school_id:data.school_id,
        })

        const savedData = await insertClass.save()
        res.send({ 'status': 200,'message':`Created Class successfully !`, 'data': savedData })
    } catch (error) {
        console.log('error',error)
        res.send({'errr':error})
    }
}

module.exports = createClass