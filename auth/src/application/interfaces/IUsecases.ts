import { IFindUserByEmailUseCase, ILoginUserUseCase, ISignUpUserUseCase} from '../../domain/useCaseinterface'
import {IDependencies} from './IDependencies'

export interface IUseCases {
    signupUserUseCase: (dependencies: IDependencies) => ISignUpUserUseCase;
    loginUserUseCase: (dependecies: IDependencies) => ILoginUserUseCase;
    findUserByEmailUseCase: (dependencies: IDependencies) => IFindUserByEmailUseCase;
}