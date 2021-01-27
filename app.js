const express = require('express');

const app = express();

app.get('/companies',(req,res) => {
   res.status(200)
   .json({
       message: 'sucsess',
       app:'ACRFTS'
   });
});

const port  = 3000;
app.listen(port, () => {
    console.log(`App runing on port ${port}...`)
}); 