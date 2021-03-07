const mongoose = require('mongoos');

const aircraftsSchema = new mongoose.Schema({
  id:{
    type:Number,
    required:[true,'Aircrafts must have an id'],
    unique:true
  },
  name:{
    type:String,
    required:[true,'Aircraft must have a name']
  },
  type:{
    type:Number,
    require:[true,'Aircraft must have a type']
  },
  model:{type:Number},
  sizeInfo:{type:String},
  description:{
    type:String,
    required:[true,'Aircarft must have a description']
  }
});

const Aircrafts = mongoose.model('Aircrafts',aircraftsSchema);
module.exports = Aircrafts;