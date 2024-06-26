const mongoose = require('mongoose');

const DataScema = mongoose.Schema({
    title:{type:String,require:true},
    Description:{type:String,require:true},
    remark:{type:String,require:true},
    image:{type:String,require:true},
    star:{type:String},
    userID:{type:mongoose.Schema.Types.ObjectId,require:true}
},

{
    timestamps:true,versionKey:false
})

const ProductModel = mongoose.model('products',DataScema);

module.exports = ProductModel;