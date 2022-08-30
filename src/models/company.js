const momo = require('../data')

const CompanySchema = new momo.Schema({
    nome_Empresa:{
        type:String,
        require:true
    },
    email_Empresa:{
        type:String,
        require:true,
        unique:true,
    },
    valor_Empresa:{
        type:momo.Schema.Types.Decimal128,
        require:true,
    }, 
    createAd:{
        type:Date,
        default:Date.now,
    }

})

const Company = momo.model('Company',CompanySchema);

module.exports = Company;