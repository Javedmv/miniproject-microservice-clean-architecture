import { AdminEntity, AdminLoginRequest } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt";

export const login = async(data: AdminLoginRequest): Promise<AdminEntity | null> => {
    try {
        console.log(data,"---------");
        if(!data.email || !data.password){
            throw new Error("Email and Passoword are required");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(data.email)) {
            throw new Error("Invalid email format");
        }
        
        if (data.password.length < 8) {
            throw new Error("Password must be at least 8 characters long");
        }

        const admin : AdminEntity | null = await Admin.findOne({email: data.email})

        if(admin){
            const passwordMatch: boolean = await bcrypt.compare(
                data.password,
                admin.password
              );
              if (!passwordMatch) {
                throw new Error("Incorrect email or password");
              } else {
                return admin as AdminEntity;
              }
        }else{
            throw new Error("Admin not found!")
        }
            
    } catch (error: any) {
        throw new Error(error?.message);
    }
}