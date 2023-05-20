const schoolSchema = require('../model/schoolDetail');

const createSchool = async(req,res)=>{
    let data = req.body
    try {
        const insertSchool= await schoolSchema.create({
            name:data.name,
            address:data.address,
            board:data.board
        })

        const savedData = await insertSchool.save()
        res.send({ 'status': 200,'message':`Created ${data.name} successfully !`, 'data': savedData })
    } catch (error) {
        console.log('error',error)
        res.send({'errr':error})
    }
}

module.exports = createSchool