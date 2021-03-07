const mongoose = require('mongoose');

const companiesSchema = new mongoose.Schema({
  id: { 
      type:Number,
      required:[true, 'A company must have an id'],
      unique:true 
  },
  name:{ 
      type:String,
      reuired:[true, 'A company must have a name']
   },
  country:{ 
      type:String,
      reuired:[true, 'A company must have a country'] 
  },
  city:{ 
      type:String,
      reuired:[true, 'A company must have a city'] 
  },
  description:{ 
      type:String,
      reuired:[true, 'A company must have a description'] 
  }
});
const Companies = mongoose.model('Companies',companiesSchema);

module.exports = Companies;
