const { Schema, model } = require('mongoose');

const Comentario = new Schema({
    name: String,
    email: String,
    comentario: String
});

module.exports = model('Comentario', Comentario);