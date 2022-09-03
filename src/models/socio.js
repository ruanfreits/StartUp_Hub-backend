const momo = require('../data')

const SocioSchema = new momo.Schema({
    nome_Socio:{
        type:String,
        require:true
    },
    email_Socio:{
        type:String,
        require:true,
        unique:true,
    },
    password_Socio:{
        type:String,
        require:true,
    },
    createAd:{
        type:Date,
        default:Date.now,
    }

})

const Socio = momo.model('Socio',SocioSchema);

module.exports = Socio;