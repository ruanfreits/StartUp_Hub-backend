const nodemailer = require('nodemailer')


async function s_Email(data){

    console.log("Usuário que envia",data.remetente,"\nUsuario que recebe",data.destinatario,"\nMenssagem enviada",data.message)
}



module.exports = s_Email