const express = require('express');
require("./db/connection");
const Student = require('./models/students');
const app = express();

const port =process.env.PORT || 3000;

app.use(express.json());
/* app.get("/" , (req, res) => {
    res.send("Hello World !");

}) */

//create a new student account


/* app.post("/students" ,(req, res) => {
    console.log(req.body);
    const user = new Student(req.body);

    user.save().then(() => {
    res.status(201).send(user);
    }).catch(err => {
        res.status(400).send(err);
    })

    
}) */

app.post("/students", async(req , res) => {

    try{
        const user = new Student(req.body);
 
   const createUser= await user.save();
   res.status(201).send(createUser);

    }catch(err){
        res.status(400).send(err);
    }
    
   
})




//read the data of registered students

app.get("/students" , async (req, res) => {
    try{
const studentsData = await Student.find();
res.send(studentsData);
    }catch(err){
        res.send(err);

    }
})

//get the individual Student data using id

app.get("/student/:id" , async (req, res) => {
    try{
        const_id = req.params.id;
        console.log(_id);
        res.send(req.params.id);
    }
    catch(err){


    }
})

app.listen(port , () => {
    console.log(`connection is setup at ${port}`);
})