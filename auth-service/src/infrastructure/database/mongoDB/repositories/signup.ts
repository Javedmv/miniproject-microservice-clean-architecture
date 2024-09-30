import { User } from "../models/loginCredential";
import { UserEntity } from "../../../../domain/entities";

export const signup = async (data: UserEntity) : Promise <UserEntity | null> => {
    try {
        
        console.log(data)
        const nwUser = await User.create(data)
        console.log("nwUser created");
        
        if(!nwUser){
            throw new Error("User creation failed!")
        }

        return nwUser as UserEntity;
        
    } catch (error:any) {
        throw new Error(error?.message)
    }
}