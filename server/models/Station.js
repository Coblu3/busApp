const mongoose = require('mongoose')


const stationScheme = new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        required:true
    },
    lat:{
        type:mongoose.Schema.Types.Number,
        required:true
    },
    lng:{
        type:mongoose.Schema.Types.Number,
        required:true
    },
    passengers:{
        type:mongoose.Schema.Types.Number,
        required:true
    }
})

mongoose.model('Station',stationScheme);