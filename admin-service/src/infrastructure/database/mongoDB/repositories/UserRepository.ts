import { User, UserData } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt";

export const addUser = async(data: UserData): Promise<User | null> => {
    try {
        console.log("--------",data);
        if(!data.email || !data.password || !data.username){
            throw new Error("Username, Email and password are required!")
        }
        if(data.username.trim() === ""){
            throw new Error("Username cannot be empty");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(data.email)){
            throw new Error("invalid email format")
        }

        if(data.password.length < 8){
            throw new Error("password must be atleast 8 character long")
        }

        const exsistingUser: User| null = await Admin.findOne({email:data.email})
        if(exsistingUser){
            throw new Error("Email already exists")
        }

        const hashedPasword = await bcrypt.hash(data.password, 10);
        const newUser = new Admin({
            email: data.email,
            username: data.username,
            password: data.password
        })

        const savedUser = await newUser.save();
        return savedUser;
    } catch (error: any) {
        throw new Error(error?.message)
    }
}