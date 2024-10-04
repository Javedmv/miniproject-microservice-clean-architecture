import { productRequest } from "../../domain/entities/AddProducts";
import { IDependencies } from "../interfaces/IDependencies";

export const addProductUseCase = (dependecies: IDependencies) => {
    const { repositories:{addProduct} } = dependecies;
    return {
        execute: async (data:productRequest) => {
            try {
                return await addProduct(data);
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}
