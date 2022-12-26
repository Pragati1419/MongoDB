 const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = "mongodb://localhost:27017/MongoDB";

mongoose.connect(mongoDB,(err) => {
    if(err) console.log(`Unable to connect to server : ${err}`);
    else
    console.log('MongoDB is Connected');
}) 



/* const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/students-api" ,{
    /* useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true */
/* }).then(() =>{
    console.log("Connection is successful");
}).catch(err =>{
    console.log("No Connection");
})  */ 