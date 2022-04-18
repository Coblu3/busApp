const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./models/User')
require('./models/Station')
require('./models/Bus')

app.use(bodyParser.json())

const User = mongoose.model('User')
const Station = mongoose.model('Station')
const Bus = mongoose.model('Bus')

const mongoUri = "mongodb+srv://akifdemirel:akifdemirel@cluster0.hxbkz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected',()=>{
    console.log("mongo connected")
})

mongoose.connection.on('error',(error)=>{
    console.log("mongo error",error)
})


app.get('/',(req,res)=>{
    console.log("asdasad");
    User.find({}).then(data=>{
        res.send(data)
        console.log("Geldi")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/findUser',(req,res)=>{
    User.findOne({username:req.body.username,password:req.body.password}).then(data=>{
        if(data){
            res.send(data)
        }
        
    }).catch(err=>{
        res.send(err)
    })
})

app.post("/addUser",(req,res)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password
    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("success post")
    }).catch(err=>{
        console.log(err)
    })
})

app.post("/addBus",(req,res)=>{
    const bus = new Bus({
        id:req.body.id,
        route:req.body.route
    })
    bus.save()
    .then(data=>{
        console.log(data)
        res.send("success post")
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/deleteUser',(req,res)=>{
    User.findOneAndRemove({username:req.body.username})
    .then(data=>{
        console.log(data)
        res.send("deleted")
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/updateUser',(req,res)=>{
    User.findOneAndUpdate({username:req.body.username},{
        username:req.body.username,
        password:req.body.password
    }).then(data=>{
        console.log(data)
        res.send("updated")
    }).catch(err=>{
        console.log(err)
    })
})

app.post("/updateStation",(req,res)=>{
    Station.updateOne({
        title:req.body.title, 
    },{
        lat:req.body.lat,
        lng:req.body.lng,
        passengers:req.body.passengers})
    .then(data=>{
        console.log(data)
        res.send("success post")
    }).catch(err=>{
        console.log(err)
    })
})



app.post("/addStation",(req,res)=>{
    const station = new Station({
        title:req.body.title,
        lat:req.body.lat,
        lng:req.body.lng,
        passengers:req.body.passengers
    })
    station.save()
    .then(data=>{
        console.log(data)
        res.send("success post")
    }).catch(err=>{
        console.log(err)
    })
})
app.get('/bus',(req,res)=>{
    Bus.find().then(data=>{
        if(data){
            res.send(data)
        }
        
    }).catch(err=>{
        res.send(err)
    })
})

app.post('/findStation',(req,res)=>{
    Station.findOne({title:req.body.title}).then(data=>{
        if(data){
            res.send(data)
        }
        
    }).catch(err=>{
        res.send(err)
    })
})

app.post('/deleteStation',(req,res)=>{
    Station.findOneAndDelete({title:req.body.title}).then(data=>{
        if(data){
            res.send(data)
        }
        
    }).catch(err=>{
        res.send(err)
    })
})

app.get('/Station',(req,res)=>{
    Station.find().then(data=>{
        if(data){
            res.send(data)
        }
        
    }).catch(err=>{
        res.send(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})