import express, {Application, Request, Response, NextFunction, urlencoded} from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { cartRoutes } from "../infrastructure/routes/cartRoutes";
import { dependencies } from "../config/dependencies";

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT || 8004)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use(cartRoutes(dependencies));

app.use((err:Error, req:Request, res:Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
      errors: [{ message: err?.message || "Something went wrong" }],
    };
    res.status(500).json(errorResponse);
    return
})

app.listen(PORT, () => {
    console.log(`connected to cart service http://localhost:${PORT}`);
})
export default app;