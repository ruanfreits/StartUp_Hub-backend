const { createTestAccount } = require('nodemailer');
const nodemailer = require('nodemailer')


//Essa função será utilizada nas próximas versões do app
//função que é utilizada para o envio de Email
async function s_Email(data){
    let testAccount = await nodemailer.createTestAccount();

    console.log("Usuário que envia",data.remetente,"\nUsuario que recebe",data.destinatario,"\nMenssagem enviada",data.message)
    let transporter = nodemailer.createTransport({
        service:'',
        //host:"smtp.ethereal.email",
        host:"smtp.ethereal.email",
        port:465,
        secure:true,
        auth:{
            //user:testAccount.user,
            //pass:testAccount.pass
            user:'patrick.mckenzie@ethereal.email',
            pass:'QgDvJwSQ6D8WSKZu9z'
        },
    });
        transporter.sendMail({
        from:'<patrick.mckenzie@ethereal.email>',
        to:"bruno.p.costa.2003@gmail.com,ruan.sf0@gmail.com",

        subject:"mensagem de teste",
        text:"mensagem de teste",
    },
    function(error){
        if(error){
            console.log(error)
        }else{
            console.log("Email enviado com sucesso")
        }
         }
    )
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
    return;
}



module.exports = s_Email