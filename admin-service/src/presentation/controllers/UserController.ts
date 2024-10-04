import { Response, Request, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { User } from "../../domain/entities";

export const addUserController = (dependencies: IDependencies) => {
  const {
    useCases: { addUserUseCase },
  } = dependencies;
  if (!addUserUseCase) {
    throw new Error("addUserUseCase is not defined in dependencies");
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const userData: User = req.body;
      console.log(
        "🚀 ~ file: UserController.ts:11 ~ returnasync ~ userData:",
        userData
      );
      const addedUser: User | null = await addUserUseCase(dependencies).execute(
        userData
      );
      console.log(
        "🚀 ~ file: UserController.ts:14 ~ returnasync ~ addedUser:",
        addedUser
      );
      res.status(201).json(addedUser);
    } catch (error: any) {
      next(error);
    }
  };
};