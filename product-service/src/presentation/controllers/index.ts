import { IDependencies } from "../../application/interfaces/IDependencies";
import { addProductController } from "./addProduct";

export const controllers = (dependencies : IDependencies) => {
    return{
        addProduct: addProductController(dependencies)   
     }
}