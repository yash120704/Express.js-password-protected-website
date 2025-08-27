import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userAuthen = false;

function passCheck(req,res,next){
    const pass = req.body.password;
    if(pass==="alphahunter"){
        userAuthen = true;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(passCheck);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
    if(userAuthen){
        res.sendFile(__dirname+"/public/secret.html");
        userAuthen = false;
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(port,()=>{
    console.log(`Website is on port ${port}.`);
})