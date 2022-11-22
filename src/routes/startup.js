const express = require("express");

const router = express.Router();
const Company = require("../models/company")
const jwt = require("jsonwebtoken")
const authenticate = require('../config/auth.json')
const mongoose = require('mongoose')

//Rota para fazer login com conta de empresa
router.post("/login", async(req,res)=>{
    try{
        const {email_Empresa,password_Empresa} = req.body
        const companies = await Company.findOne({email_Empresa}).select("+password_Empresa")
        //Verificação de existencia de usuário
        if(!companies)
            return res.status(400).send({error:'Empresa not founded'})
        
        //Verificação de senha
        if (await password_Empresa != companies.password_Empresa)

            return res.status(400).send({error:'invalid password'})
        companies.password_Empresa == undefined
        
        const token = jwt.sign({userId:companies.id},authenticate.secret,{expiresIn:86400});
        res.send({"usuário":companies,"auth":true,"token":token})
    }
    catch(err){
        console.error(err,"Erro no servidor")
        res.send({"Error":err})
    }
    })


//Rota que obtem todas as empresas cadastradas na nossa plataforma
router.get("/getAllCompany", async(req,res)=>{
    console.log("rodando.....")
    try{
        const companies = await Company.find()
        console.log(companies)
        return res.send(companies)
    }
    catch(err){
        return res.status(400).send({error:"Error loading companies"})
    }

    console.log(lista);

//rota utilizada para a criação de empresas
router.post('/createCompany', async (req,res)=>{
   
    try{
        const {
            nome_Empresa,
            email_Empresa,
            password_Empresa,
            valor_Empresa,
            descricao_Empresa,
            user_Type} = req.body;
        const companies = await new Company({
            nome_Empresa,
            email_Empresa,
            password_Empresa,
            valor_Empresa,
            descricao_Empresa,
            user_Type})

    companies.save();
    const token = jwt.sign({id: companies.id}, authenticate.secret, {
      expiresIn: 86400,
    });
    return res.send({empresa: companies, token: token}, 200);
  } catch (err) {
    return res.status(400).send({error: "Error creating new company"});
  }
});

//ROTA de Obtenção de uma unica empresa
router.get("/:id", async (req, res) => {
  //const result = mongoose.Types.ObjectId.isValid(req.param.id);
  //console.log("resultado aqui",result)
  //if(result == true)
  //    return res.send({"msg":"Bad Request the Id is not in the right type"},400)
  try {
    //console.log(result)
    const companies = await Company.findById(req.params.id);
    console.log(companies);
    if (!companies) return res.status(400).send({error: "Company not founded"});
    return res.send(companies);
  } catch (err) {
    return res.send({msg: "Server Error"}, 500);
  }
  //return res.send({"msg":"Error Server "},500)
  //}
});

module.exports = router;
