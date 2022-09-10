const { SchemaType } = require('../data');
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
    cpf_Socio:{
        type:String,
        require:true,
        unique:true
    },
    nicho_Socio:{
        type:String,
        require:true,
    },
    valorRisco_Socio:{
        type:momo.Schema.Types.Decimal128,
        require:true,
    },
    user_Type:{
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