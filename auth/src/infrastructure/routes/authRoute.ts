import { Router } from "express";
import {IDependencies} from '../../application/interfaces/IDependencies';
import { controllers } from "../../presentation/controllers/index";

export const authRoute = (dependencies: IDependencies) => {
    const {signup} = controllers(dependencies);
    
    const router = Router();
    
    router.route("/signup").post(signup);
    
    return router
}