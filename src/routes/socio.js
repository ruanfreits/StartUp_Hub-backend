const express = require('express');
const router = express.Router();
const Socio = require("../models/Socio")

router.post("/login", async(req,res)=>{
    const {userEmail,userPassword} = req.body
    const socio = await Socio.User.findOne({userEmail})
    
    console.log("value on userEmail",userEmail)
    res.send({"usuário":socio})
    
})

router.get("/geteste",async (req,res)=>{
    res.send({"msg":"Hey it is working"},200)
})

router.get("/getAllSocios", async(req,res)=>{
    try{
        const socios = await Socio.find()
        console.log(socios)
        return res.send({socios})
    }
    catch(err){
        return res.status(400).send({error:"Error loading companies"})
    }
})



router.post("/SignOn",async(req,res)=>{
    console.log("passando aqui")
    try{
         const {nome_Socio,email_Socio,password_Socio,userType} = req.body
         const socios = await new Socio({nome_Socio,email_Socio,password_Socio,userType})
         console.log(socios)

     await socios.save()
     
    return res.send({"Socio Criado":socios},200)
    }catch(err){
        console.error(err)
        return res.status(400).send({"error": 'Error creating new socio'})

} 

})


module.exports = router;