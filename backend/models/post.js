const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    from : {
        type : String,
        // required : true
    },
    to : {
        type : String,
        // required : true
    },
    message : {
        type : String
    },
    files : [],
    created : {
        type : Date,
        default : Date.now()
    }
})

const postModel = mongoose.model('postModel',postSchema);
module.exports = postModel;
