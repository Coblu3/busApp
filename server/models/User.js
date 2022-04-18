const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:false
    }
})




mongoose.model('User',userScheme);
