const express=require('express')
const app=express()
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://Sridhar-542:MSdhoni%409494@tetrisdata.pdpnl.mongodb.net/tetrisData')
const db=mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('connected to DB'))

app.use(express.json())//For post data parsing
const routes=require("./routes/tetris")
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
app.use('',routes)

app.listen(3000,()=>console.log("Server started"))