const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/getProducts',(req,res)=>{
    let data=req.body;
})

app.listen(3001,()=>console.log("server is listening in 3000"))