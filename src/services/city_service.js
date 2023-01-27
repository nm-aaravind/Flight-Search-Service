const { CityRepository } = require("../repository/index");

async function createCity(data) {
    try {
        const result = await CityRepository.createCity(data);
        return result;
    } catch (error) {
        console.log("Got error in service layer-create city");
    }
}
async function deleteCity(cityId) {
    try {
        const result = await CityRepository.deleteCity(cityId);
        return result;
    } catch (error) {
        console.log("GOt error in service layer-delete city");
    }
}
async function updateCity(cityId, data) {
    try {
        const result = await CityRepository.updateCity(cityId, data);
        return result;
    } catch (error) {
        console.log("Got error in service layer-update city");
    }
}
async function getCity(cityId) {
    try {
        const result = await CityRepository.getCity(cityId);
        return result;
    } catch (error) {
        console.log("Got error in service layer-get city funciton");
    }
}

module.exports = {
    createCity, deleteCity, updateCity, getCity
}