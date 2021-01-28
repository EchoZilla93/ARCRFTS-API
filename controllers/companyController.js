const fs = require('fs');
const companies = JSON.parse(fs.readFileSync(`${__dirname}/../data/companies.json`));

exports.getAllCompanies = (req,res) => {
  res.status(200)
  .json({
      status: 'sucsess',
      results:companies.length,
      data:{
          companies
      }
  });
};

exports.getCompanyById = (req,res) => {
  const id = req.params.id * 1;
  const company = companies.find(el => el.id === id);

  if(id > companies.length) {
      return res.status(404).json({
          status:'fail',
          message:'Invalid ID'
      });
  };
  
  res.status(200).json({
      status:'success',
      data:{
          company
      }
  });
};