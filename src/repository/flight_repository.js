const { Flight } = require("../models/index");
const {Op}=require("sequelize");
class FlightRepository {
    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            Object.assign(filter,{arrivalAirportId:data.arrivalAirportId});
        }
        if(data.departureAirportId){
            Object.assign(filter,{departureAirportId:data.departureAirportId});
        }   
        let pricefilter=[];
        if(data.minprice){
            pricefilter.push({cost:{[Op.gte]:parseInt(data.minprice)}});
        }
        if(data.maxprice){
             pricefilter.push({cost:{[Op.lte]:parseInt(data.maxprice)}});
        }
        Object.assign(filter,{[Op.and]:pricefilter});
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Got error in repo of createflight")
        }
    }
    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Got error due to findbypk in repo of getflight");
        }
    }
    async getAllFlights(filter) {
        try {
            let filterObject=this.#createFilter(filter);
            console.log(filterObject)
            const flights=await Flight.findAll({
                where:filterObject
            });
            return flights;
        } catch (error) {
            console.log("Got error repo of getallflights")
        }
    }
}
module.exports = FlightRepository;