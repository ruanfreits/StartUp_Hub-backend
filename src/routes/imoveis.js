const express = require('express');
const router = express.Router();

/*rota de teste*/
router.get('/getRouter',(req,res,next)=>{
    res.status(200).send({
        menssage:"Get by router made succesfully"
    })
})
//router.post('/')


/*rota de GET*/
router.post('/sendMessage',(req,res,next)=>{
    
    const imovel={
        tipo:req.body.tipo,
        numero:req.body.numero,
        endereco:req.body.endereco
    }
    
    //console.table("requisição feita",imovel)
    
    
    res.status(200).send({
     menssage:"Post made succesfully",
    imovel_Cadastrado:imovel
    });
});


router.get('/grupoImoveis/:cep',(req,res,next)=>{
    const cep = req.params.cep
    res.status(200).send({
        cep:cep,
        Imoveis:[
            {
            Tipo:"Casa",
            numero:454,
            Endereco:"Rua Carlos Simais",
            Bairro:"Vila Caetano",},
            {
                Tipo:"Apartamento",
                numero:233,
                Endereco:"Rua Carlos Simais",
                Bairro:"Vila Caetano",
            }] 
    
    })
})

module.exports = router;