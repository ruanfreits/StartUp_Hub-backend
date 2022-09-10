const express = require('express');

const router = express.Router();
const Socio = require("../models/Socio")
const jwt = require('jsonwebtoken')
const authenticate = require('../config/auth.json')

router.post("/login", async(req,res)=>{
try{
    const {email_Socio,password_Socio} = req.body
    const socios = await Socio.findOne({email_Socio}).select("+password_Socio")
    //Verificação de existencia de usuário
    if(!socios)
        return res.status(400).send({error:'User not founded'})

    //Verificação de senha
    if (await password_Socio != socios.password_Socio)
        return res.status(400).send({error:'invalid password'})
    socios.password_Socio == undefined
    
    const token = jwt.sign({userId:socios.id},authenticate.secret,{expiresIn:86400});
    res.send({"usuário":socios,"auth":true,"token":token})
}
catch(err){
    console.error(err,"Erro no servidor")
    res.send({"Error":err})
}
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
         const {nome_Socio,
            email_Socio,
            password_Socio,
            cpf_Socio,
            nicho_Socio,
            valorRisco_Socio,
            user_Type,
            } = req.body
         const socios = await new Socio({
            nome_Socio,
            email_Socio,
            password_Socio,
            cpf_Socio,
            nicho_Socio,
            valorRisco_Socio,
            user_Type,
            })
        socios.save()
        const token = jwt.sign({id:socios.id},authenticate.secret,{expiresIn:86400});
    return res.send({"Socio Criado":socios,"auth":true,"token":token},200)
    }
    catch(err){
        console.error(err)
        return res.status(400).send({"error": 'Error creating new socio'})

} 

})




module.exports = router;