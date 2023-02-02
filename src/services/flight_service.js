const {FlightRepository,AirplaneRepository}=require("../repository/index");
const { compareTime } = require("../utils/helper");
async function createFlight(data){
    try {
        if(!compareTime(data.arrivalTime,data.departureTime)){
            throw {error:"Arrival lesser than departure"}
        } 
        const airplane=await AirplaneRepository.getAirplane(data.airplaneId);
        const flight=await FlightRepository.createFlight({
            ...data,totalSeats:airplane.capacity
        })
        return flight;
    } catch (error) {
        console.log("Got error in service of createflight")
    }
}
module.exports={
    createFlight
}
/**
 * flightnumber
 * airplaneid
 * departureairportid
 * arrivalairportid
 * arrivaltime
 * departuretime
 * price
 * totalseats
 */