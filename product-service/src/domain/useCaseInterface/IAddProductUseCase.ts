import { Product, productRequest } from '../entities';

export interface IAddProductUseCase {
    execute(data: productRequest): Promise<Product | null>;
}