const express = require('express');
const router = express.Router();
const s_Email = require('../utils/sendEmail')

router.get('/getAll',(req,res,next)=>{
    res.status(200).send({
        mensagem:"Get Sucessfuly",
        Lista:[
       {id:123,
           nome:"stuart",
           cargo:"Ass.RH"
        },
        {id:566,
           nome:"fernandinho",
           cargo:"Aux.Administração"
        }
       ]
    })   
   })


router.post('/sentMessage',(req,res)=>{
      correio = {
         remetente:req.body.remetente,
         destinatario: req.body.destinatario,
         message:req.body.menssagem
      }

      s_Email(req.body.remetente,req.body.destinatario,req.body.menssagem)
      
      res.status(200).send({
      message:"The email was sent succesfully",
      correio:correio
   })
})


module.exports = router;