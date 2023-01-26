const express=require("express");
const {PORT}=require("./config/serverConfig.js")
const bodyParser=require("body-parser");
const createAndSetupServer=async () => {
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(3000,()=>{
        console.log("Server started in PORT",PORT);
    })
}
createAndSetupServer();
