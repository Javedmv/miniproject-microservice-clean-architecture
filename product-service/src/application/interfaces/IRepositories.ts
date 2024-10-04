import { Product, productRequest } from "../../domain/entities";

export interface IRepositories {
    addProduct: (data:productRequest) => Promise <Product | null>
}