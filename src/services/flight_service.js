const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");
class FlightService {
    constructor(){
        this.flightrepository=new FlightRepository();
    }
    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: "Arrival lesser than departure" }
            }
            const airplane = await AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({
                ...data, totalSeats: airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Got error in service of createflight")
        }
    }
    async getAllFlights(filter){
        try {
            const flights=await this.flightrepository.getAllFlights(filter);
            return flights;
        } catch (error) {
            console.log("Got error in service of getallfligths")
        }
    }
}
module.exports = FlightService;
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