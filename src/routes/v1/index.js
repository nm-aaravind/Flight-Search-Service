const express=require("express");
const router=express.Router();
const cityController=require("../../controllers/city_controller")
const airportcontroller=require("../../controllers/airport_controller")


router.post("/city",cityController.create);
router.delete("/city/:id",cityController.destroy)
router.get("/city/:id",cityController.get)
router.get("/city",cityController.getAll)
router.patch("/city/:id",cityController.update)
router.post("/manycities",cityController.createMany)

router.post("/airport",airportcontroller.create);
router.get("/airport/:id",airportcontroller.get)
router.get("/manyairports",airportcontroller.getAll)
router.delete("/airport/:id",airportcontroller.destroy)
router.patch("/airport/:id",airportcontroller.update);
module.exports=router;   