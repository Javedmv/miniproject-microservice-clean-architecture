import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { hashPassword } from "../../utils/bcrypt/hashPassword";
import generateToken from "../../utils/jwt/generateToken";

export const signupController = (dependencies: IDependencies) => {
    const {
        useCases: {signupUserUseCase, findUserByEmailUseCase},
    } = dependencies;

    return async (req:Request, res:Response, next: NextFunction) : Promise<void> => {
        try {
            
            console.log(req.body)
            const credentials = req.body;
            
            if(!credentials.username || !credentials.username.trim()){
                res.status(400).json({success: false, message: "Username cannot be empty"})
                return;
            }

            if(!credentials.email || !credentials.password){
                res.status(400).json({success: false, message: "Email and Password are required"})
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!emailRegex.test(credentials.email)){
                res.status(400).json({success: false, message: "Invalid email format"})
                return;
            }

            if(credentials.password.length < 6){
                res.status(400).json({success: false , message: "Password must be atleast 6 characters length"})
                return;
            }

            console.log('searching for user with email:',credentials.email);

            try {
                const exsistingUser = await findUserByEmailUseCase(dependencies).execute(credentials.email)
                console.log("Exsisting User:",exsistingUser);
                if(exsistingUser){
                    res.status(400).json({success:false, message: "Email already Exists"})
                    return;
                }
            } catch (error) {
                console.error("Error finding user by email:", error)
            }
            console.log('Hello world');
            
            const hashedPassword : string | null = await hashPassword(credentials.password)
            credentials.password = hashedPassword;
            const user = await signupUserUseCase(dependencies).execute(req.body);
            
            if(user){
                const userId : string = user._id?.toString() ?? ""
                const token = generateToken({
                    userId: userId,
                    userEmail: user.email,
                    isAdmin: user.isAdmin,
                    isBlocked: user.isBlocked
                })
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                })
                res
                    .status(201)
                    .json({ success: true, data: user, message: "User Created" });

                const addedUser = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    isBlocked: user.isBlocked,
                    isAdmin: user.isAdmin
                }
                if(addedUser){
                    // create kafka functianality here
                }
            }else{
                res.status(404).json({success: false, message: "User not found"})
            }

        } catch (error) {
            next(error);
        }
    }
}