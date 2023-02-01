const {Flight}=require("../models/index");
async function createFlight(data){
    try {
        console.log(data);
        const flight=await Flight.create(data);
        return flight;
    } catch (error) {
        console.log("Got error in repo of createflight")
    }
}
module.exports={
    createFlight
}