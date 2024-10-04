import { Product, productRequest } from "../../../../domain/entities";
import { product } from "../models/productSchema";

export const addProduct = async (data: productRequest): Promise<Product | null> => {
    try {
        const newProduct = new product(data)

        const savedProduct = await newProduct.save();
        
        return savedProduct as Product;

    } catch (error: any) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product.");
    }
}