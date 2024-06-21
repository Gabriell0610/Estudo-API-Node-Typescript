import { Router } from "express";
import { SpecificationRepository, } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

//Criando um objeto que instância a classe Repository
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);
  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});
 


export { specificationsRoutes };

