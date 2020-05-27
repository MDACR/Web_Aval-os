

const { Schema, model } = require('mongoose');

const PhotoCot = new Schema({
    
    imageURL: String
  
});

module.exports = model('PhotoCot', PhotoCot);