const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        minLength: 3

    },
    
        email:{
            type: 'string',
            required: true,
            unique: [true ,"Emailid already present"],
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },

        phone:{
            type: 'number',
            min: 10,
           required: true,
            unique: true 
        },

        address:{
            type: 'string',
            required: true,
            
        }

    
})

//we will create a new collection with

const Student =new mongoose.model('Student' ,studentSchema);
module.exports = Student;