const dotenv=require("dotenv")
dotenv.config()
const express= require('express');
const bodyParser = require('body-parser');
const router = require('./router/route');
const app= express();  
const mongoose = require('mongoose');
const multer=require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any()) 

mongoose.connect(process.env.DB_MONGO_URL,{
    useNewUrlParser:true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',router)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

