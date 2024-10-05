import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { listProduct } from '../database/mongoDB/repositories/listProducts';

export const addProduct = (dependencies: IDependencies) => {
  const { addProduct, listProduct } = controllers(dependencies);

  const router = Router();

  router.route("/addproduct").post(addProduct);
  router.route("/products").get(listProduct)

  return router;
};