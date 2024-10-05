import { IAddProductUseCase, IListProductUseCase } from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";
import { dependecies } from '../../../../auth-service/src/config/dependencies';

export interface IUseCases{
    addProductUseCase: (dependencies: IDependencies) => IAddProductUseCase;
    listProductUseCase: (dependecies:IDependencies) => IListProductUseCase;
}