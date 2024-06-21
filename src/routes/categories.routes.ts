import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();

//Criando um objeto que instância a classe Repository
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  //Objeto que instacia a classe CreateCategoryService, passando o repostories como constructor da classe
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const dataCategories = categoriesRepository.list();
  return res.status(200).json({ dataCategories });
});

export { categoriesRoutes };

