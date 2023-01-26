const { City }=require("../models/index.js")
async function createCity(name){
    try{
        const city=await City.create({ Name:name });
        return city;
    } catch(error){
        console.log("Got error in error handling of createCity");
    }
}
async function updateCity(cityId,data){
    try{
        const object=await City.update(data,{
            where:{
                id:cityId
            }
        })
        return object;
    }catch(error){
        console.log("Got error in error handling of updateCity")
    }
}
async function findCity(cityId){
    try{
        const object=await City.findByPk(cityId);
        return object;
    }catch(error){
        console.log("Got error in error handling of findCity")
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
    createCity,deleteCity,updateCity,findCity
}