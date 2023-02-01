const express=require("express");
const router=express.Router();
const cityController=require("../../controllers/city_controller")
const airportcontroller=require("../../controllers/airport_controller")
const flightcontroller=require("../../controllers/flight_controller")


router.post("/cities",cityController.create);
router.delete("/cities/:id",cityController.destroy)
router.get("/cities/:id",cityController.get)
router.get("/cities",cityController.getAll)
router.patch("/cities/:id",cityController.update)
router.post("/manycities",cityController.createMany)

router.post("/airports",airportcontroller.create);
router.get("/airports/:id",airportcontroller.get)
router.get("/manyairports",airportcontroller.getAll)
router.delete("/airports/:id",airportcontroller.destroy)
router.patch("/airports/:id",airportcontroller.update);
router.get("/airportsofcity/:id",airportcontroller.airportofCity)

router.post("/flights",flightcontroller.create)
module.exports=router;   