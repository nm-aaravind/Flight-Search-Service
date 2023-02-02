const {FlightService}=require("../services/index")
const flightservice=new FlightService();
const create=async (req,res)=>{
    try {
        const flights=await flightservice.createFlight(req.body);
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
const getAllFlights=async(req,res)=>{
    try {
        const flights=await flightservice.getAllFlights(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:"Fetched flights based on filter"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Cannot fetch based on filter"
        })
    }
}
module.exports={
    create,getAllFlights
}