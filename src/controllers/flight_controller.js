const {FlightService}=require("../services/index")
const create=async (req,res)=>{
    try {
        const flights=await FlightService.createFlight(req.body);
        return res.status(200).json({
            data:flights,
            success:true,
            err:{},
            message:"Created flight"
        })
    } catch (error) {
        return res.status(500),json({
            success:false,
            message:"Canont create flight",
            err:error
        })
    }
}
module.exports={
    create
}