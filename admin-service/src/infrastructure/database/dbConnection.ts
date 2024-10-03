import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export default async () => {
  console.log(process.env.MONGO_URI, "-----");
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log("🍃🍃🍃🍃🍃🍃 Admin database connect 🍃🍃🍃🍃🍃🍃");
  } catch (error: any) {
    console.error(`🍁🍁🍁🍁🍁 Database Connection failed 🍁🍁🍁🍁🍁`);
    console.error(error.message);
    process.exit(1);
  }
}