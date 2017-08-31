var mongoose = require('mongoose')
var Schema = mongoose.Schema


var patientSchema = new Schema({
    name: {
    type: String,
    required : true,    
    },
    disease:{
       type: String,
       required : true, 
    },
    medication: {
       type: String,
       required : true, 
    },
    date : {
        type : Date,
    }
})

const patient = mongoose.model('patientInfo', patientSchema)

module.exports = patient
