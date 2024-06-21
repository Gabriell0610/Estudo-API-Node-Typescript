import { Router } from "express";
import { createSpecificationController } from "../modules/cars/controller/createSpecification";
import { listSpecificationController } from "../modules/cars/controller/listSpecification";


const specificationsRoutes = Router();


specificationsRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req,res)
});

specificationsRoutes.get("/", (req, res) => {
  return listSpecificationController.handle(req,res)
})
 


export { specificationsRoutes };

