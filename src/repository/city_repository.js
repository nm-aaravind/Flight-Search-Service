const { City }=require("../models/index.js")
async function createCity(data){
    try{
        const city=await City.create(data);
        return city;
    } catch(error){
        console.log("Got error in repo of createCity");
    }
}
async function updateCity(cityId,data){
    try{
        //The below method doesnt return the object, hence altered code is written below
        // const object=await City.update(data,{
        //     where:{
        //         id:cityId
        //     }
        // })
        // return object;
        const city=await City.findByPk(cityId,{
            attributes:['id','Name','createdAt','updatedAt']
        });
        city.Name=data.Name;
        const obj=await City.update(data,{
            where:{
                id:cityId
                }
        })
        return city;
    }catch(error){
        console.log("Got error in repo of updateCity")
    }
}
async function getCity(cityId){
    try{
        const object=await City.findAll({
            attributes:['id','Name','createdAt','updatedAt'],
            where:{
                id:parseInt(cityId)
            }
        });
        return object;
    }catch(error){
        console.log("Got error in repo of findCity")
    }
}
async function deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
    } catch(error){
        console.log("Got error in repo of deleteCity")
    }
}
module.exports={
    createCity,deleteCity,updateCity,getCity
}