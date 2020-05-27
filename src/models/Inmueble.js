

const { Schema, model } = require('mongoose');

const Inmueble = new Schema({
    tipo : {type : String, required : true},
    area : {type : Number, required : false},
    pisos : {type: String, required : false},

    provincia : {type: String, required : true},
    canton : {type : String, required : false},
    distrito : {type : String, required : false},
    comentario : {type : String, required : true},
    
    nombre: {type : String, required : true},
    email: {type : String, required : true},
    telefono: {type : String, required : false},
    fotos: {type : String, required : false}

});

module.exports = model('Inmueble', Inmueble);