import { Product } from "../../../../domain/entities";
import { verifyToken } from "../../../../utils/verifyToken";
import { product } from "../models/productSchema";
 

export const listProduct = async (token: string): Promise<Product[] | null> => {
    try {
        const decodedToken: any = await verifyToken(token);
        console.log("🚀 ~ file: listProduct.ts:8 ~ listProduct ~ decodedToken:", decodedToken);

        const role: string | undefined = decodedToken?.role;
        console.log("🚀 ~ file: listProduct.ts:11 ~ listProduct ~ Role:", role)

        if(!role){
            throw new Error("Role not found in token payload");
        }
        if(role == "user"){
            throw new Error("Unauthorized access: User role does not have permission to list products");
        }
        const products : Product[] = await product.find();
        return products.length > 0 ? products : null;

    } catch (error: any) {
        console.error("Failed to list products:", error);
        throw new Error("Failed to list products");
    }
}