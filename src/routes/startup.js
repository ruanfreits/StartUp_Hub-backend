const express = require('express');
const router = express.Router();
const Company = require("../models/Company")


router.get("/getAllCompany", async(req,res)=>{
    try{
        const companies = await Company.find()
        console.log(companies)
        return res.send({companies})
    }
    catch(err){
        return res.status(400).send({error:"Error loading companies"})
    }
})

router.post('/createCompany', async (req,res)=>{
   
    try{
        const {nome_Empresa, email_Empresa, valor_Empresa} = req.body;
        const company = await new Company({nome_Empresa, email_Empresa, valor_Empresa})
       
        // await Promise.all(tasks.map(async task =>{
        //     const projectTask = new Task({...task, project: project._id})
        
        //     await projectTask.save();
        //    project.tasks.push(projectTask)
        // }))
       
       /* tasks.map(task =>{
            const projectTask = new Task({...task, project: project._id})
        
            projectTask.save().then(task => project.tasks.push(task))
        })*/ 

    await company.save()
    return res.send({company})   
} catch(err){
        return res.status(400).send({error: 'Error creating new company'})
}
})






module.exports = router;