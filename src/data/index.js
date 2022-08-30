const momo = require('mongoose')
require('dotenv').config();

momo.connect(process.env.DATABASE_URL).then(()=>{
    
    console.log("Mongo DB conectado com sucesso")
})
.catch((error)=>{
    return console.error("Alerta! Erro ao se concectar",Error)
})

momo.Promise = global.Promise;

module.exports = momo;