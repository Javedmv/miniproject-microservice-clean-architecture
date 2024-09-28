import { IFindUserByEmailUseCase, ISignUpUserUseCase} from '../../domain/useCaseinterface'
import {IDependencies} from './IDependencies'

export interface IUseCases {
    signupUserUseCase: (dependencies: IDependencies) => ISignUpUserUseCase;
    findUserByEmailUseCase: (dependencies: IDependencies) => IFindUserByEmailUseCase;
}