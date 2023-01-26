const express=require("express");
const {PORT}=require("./config/serverConfig.js")
const bodyParser=require("body-parser");
const cityRepository=require("./repository/city_repository.js")
const createAndSetupServer=async () => {
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(3000,async ()=>{
        console.log("Server started with PORT",PORT);
        cityRepository.createCity("New Delhi");
    })
}
createAndSetupServer();
