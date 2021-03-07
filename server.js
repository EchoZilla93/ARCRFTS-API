const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({path:'./config.env'});

const DB = process.env.DB.replace(
    '<PASSWORD>',
    process.env.DBPASS
);

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(() => console.log('DATABASE CONNECTED'));


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`App runing on port ${port}...`)
}); 