const express = require('express')
const app = express()

const morgan = require('morgan')
const bodyParser = require('body-parser') 

const rotaCompany = require('./routes/startup')
const rotaImoveis = require('./routes/imoveis')
const rotaUsuarios = require('./utils/usuarios')
const rotaSocio = require('./routes/socio')


//biblioteca para notificação de requisição no prompt
app.use(morgan('dev'))

//uso de funções do express para o cosumo do body 
app.use(express.urlencoded({extended:false})) //dados simples
app.use(express.json())

//vinculo de rotas com seus endpoints
app.use('/company',rotaCompany);
app.use('/imoveis',rotaImoveis);
app.use('/user', rotaUsuarios);
app.use('/socio', rotaSocio);

//tratativa de requisições as quais não existem
app.use((req,res,next)=>{
    const error = new Error('Não encontrado');
    error.status =404;
    next(error);
})

//tratativa de erro 500
app.use((error,req,res,next)=>{
    res.status(error.status|| 500)
    return res.send({erro:{ messagem:error.message}})
});

module.exports = app;