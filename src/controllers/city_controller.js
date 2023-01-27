//This file is used to communicate with city service
const { CityService }=require("../services/index")
//segragate all the middlewares at one place. controllers at one place, routes in one place.
//Controller is also a type of final middleware.

//POST, info in req.body
const create=async (req,res)=>{
    try {
        const city=await CityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create city"
        })
    }
}

//Delete req. id send in /city/:id req.params.id
const destroy=async (req,res)=>{
    try {
        const city=await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Deleted city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete city"
        })
    }
}

//get request, /city/:id
const get=async (req,res)=>{
    try {
        const city=await CityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Fetched city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get city"
        })
    }
}
//Patch,/city/id, data in body
const update=async (req,res)=>{
    try {
        const city=await CityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "Updated city"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update city"
        })
    }
}
module.exports={
    create,destroy,get,update
}
