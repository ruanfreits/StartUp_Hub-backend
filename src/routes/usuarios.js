const express = require('express');
const router = express.Router();
const s_Email = require('../utils/sendEmail')


//Rota que serár utilizada futuramente par ao envio de proposta do socio para os donos da StartUp
router.post('/sentMessage',(req,res)=>{
      correio = {
         remetente:req.body.remetente,
         destinatario: req.body.destinatario,
         message:req.body.menssagem
      }

      s_Email(correio)
      
      res.status(200).send({
      message:"The email was sent succesfully",
      correio:correio
   })
})


module.exports = router;