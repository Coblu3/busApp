const mongoose = require('mongoose')


const BusScheme = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:true
    },
    route:{
        type:mongoose.Schema.Types.Array,
    }

})

mongoose.model('Bus',BusScheme);