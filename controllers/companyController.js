const Companies = require('../model/companiesModel');

exports.getAllCompanies = async (req,res) => {
    try{
        const companies = await Companies.find();
        res.status(200)
        .json({
            status: 'sucsess',
            results:companies.length,
            data:{
                companies
            }
        });
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
};

exports.getCompanyById = async (req,res) => {
 try{
   const company = await Companies.findById(req.params.id);
   res.status(200).json({
       status:'success',
       data:{
           company
       }
   })
 }catch(err){
     res.status(404).json({
         status:'fail',
         message: `Invalid ID or : ${err}`
     })
 }
};