const sectionSchema = require('../model/sectionModel')

const createSection = async(req,res)=>{
    let data = req.body
    try {
        const insertSection= await sectionSchema.create({
            section_name:data.section_name,
            class_id:data.class_id,
        })

        const savedData = await insertSection.save()
        res.send({ 'status': 200,'message':`Created Secton successfully for ${data.class_id} !`, 'data': savedData })
    
    } catch (error) {
        console.log('Sceneess!',error)
        res.send({'error here':error})
    }
}

module.exports = createSection