import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if(!mongoUrl){
            throw new Error("MongoDB connection string not provided in environment variables")
        }

        await mongoose.connect(mongoUrl.trim())
        console.log(`🍃🍃🍃🍃🍃🍃 MongoDB connected successfully!🍃🍃🍃🍃🍃🍃`);
    } catch (error: any) {
        console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
        console.error(error?.message);
        process.exit(1)
    }
}