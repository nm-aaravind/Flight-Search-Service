const { City }=require("../models/index.js")
async function createCity(name){
    try{
        const city=await City.create({ Name:name });
        return city;
    } catch(error){
        console.log("Got error in error handling of createCity");
    }
}
async function deleteCity(name){
    try{
        await City.destroy({
            where:{
                Name:name
            }
        });
    } catch(error){
        console.log("Got error in error handling of deleteCity")
    }
}
module.exports={
    createCity,deleteCity
}