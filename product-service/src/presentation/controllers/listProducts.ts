import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { Product } from "../../domain/entities";

export const listProductsController = (dependencies: IDependencies) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        const {useCases : {listProductUseCase}} = dependencies;
        try {
            const token: string | any = req.cookies.user_jwt;
            console.log("🚀 ~ file: listProducts.ts:10 ~ returnasync ~ token:", token)
            
            if(!token){
                throw new Error("Authentication failed due to token undefined")
            }

            const  products: Product[] | null = await listProductUseCase(dependencies).execute(token);

            if(!products){
                throw new Error("products not found")
            }
            res.status(200).json({success: true, data: products})

        } catch (error: any) {
            next(error)
        }
    }
}