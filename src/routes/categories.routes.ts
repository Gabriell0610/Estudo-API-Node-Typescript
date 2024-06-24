import { Router } from "express";
import { createCategoryController } from "../modules/cars/controller/createCategory/";
import { importCategoryController } from "../modules/cars/controller/importCategory";
import { listCategoriesController } from "../modules/cars/controller/listCategories/";

import multer from "multer";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
})

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res)
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res)
})


categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res)
})

export { categoriesRoutes };

