import { AdminEntity, AdminLoginRequest } from "../entities/index";

export interface loginAdminUseCase {
    execute(credentials : AdminLoginRequest) : Promise<AdminEntity | null>;
};