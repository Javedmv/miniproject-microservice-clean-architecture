import { IAddProductUseCase } from "../../domain/useCaseInterface/IAddProductUseCase";
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addProductUseCase: (dependencies: IDependencies) => IAddProductUseCase;
}