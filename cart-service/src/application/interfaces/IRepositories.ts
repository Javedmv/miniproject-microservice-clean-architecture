import { CartEntity, AddToCartRequest } from "../../domian/entities/cartEntity";

export interface IRepositories{
    addToCart:(data:AddToCartRequest)=>Promise<CartEntity | null >;
    getCart:(userId:string)=>Promise<CartEntity | null >;
}