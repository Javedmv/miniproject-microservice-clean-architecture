import { IGetCartUseCase, IaddToCartUseCase } from "../../domian/useCaseInterface.ts";
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addToCartUseCase:(dependencies:IDependencies)=>IaddToCartUseCase;
    getCart:(dependencies:IDependencies)=>IGetCartUseCase;
}