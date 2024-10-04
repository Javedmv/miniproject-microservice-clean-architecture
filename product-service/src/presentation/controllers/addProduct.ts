import {Request, Response, NextFunction} from 'express';
import { IDependencies } from '../../application/interfaces/IDependencies';
import { validateProductRequest } from '../../utils/productValidation';
import { Product } from '../../domain/entities';


export const addProductController = (dependencies :IDependencies) => {
    const { useCases: { addProductUseCase } } = dependencies;    
    return async (req:Request, res:Response, next:NextFunction): Promise<void> => {
        try {
            const data = req.body;
            const validationResult = validateProductRequest(data)
            
            if(!validationResult.isValid){
                res.status(400).json({success: false, errors: validationResult.errors})
                return;
            }

            const product: Product | null = await addProductUseCase(dependencies).execute(data);

            res.status(201).json({success: true, data: product})
            if (product) {
                const addedProduct = {
                  _id: product._id,
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  stock: product.stock,
                };
//   implement kafka here
                // productCreatedProducer(addedProduct);
                res.status(201).json({ success: true, data: product });
              } else {
                res.status(404).json({ success: false, message: "Product not found" });
              }

        } catch (error: any) {
            next(error)
        }
    }

}