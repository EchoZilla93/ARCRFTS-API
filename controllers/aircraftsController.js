const Aircrafts = require('../model/companiesModel');

exports.getBoeing = async (req,res) => {
  try{
    const boeing = await Aircrafts.find({name:'Boeing'});
    res.status(200)
    .json({
      status:'sucsess',
      results:boeing.length,
      data:{
        boeing
      }
    })
  }catch(err){
    res.status(400).json({
      status:'fail',
      messagee:err
    });
  };
};