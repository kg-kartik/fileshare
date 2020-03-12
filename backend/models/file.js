const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    originalName : {
        type : String,
        required : true
    },
    mimeType : {
        type : String,
        required : true
    },
    size : {
        type : Number,
        required : true
    },
    created : {
        type : Date,
        default: Date.now()
    }
})

const fileModel = mongoose.model('fileModel', fileSchema);

module.exports = fileModel;

