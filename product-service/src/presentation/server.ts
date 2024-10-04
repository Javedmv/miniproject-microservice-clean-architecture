import express, { Request, Response, NextFunction, Application } from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import { addProduct } from '../infrastructure/routes/addProduct';
import { dependencies } from '../config/dependencies';
import dbConnection from '../infrastructure/database/dbConnection';

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT || 8003);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(addProduct(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{ message: err?.message || "Something went wrong" }]
    };
    res.status(500).json(errorResponse);
    return;
});

export const startServer = async () => {
    await dbConnection();
    app.listen(PORT, () => {
        console.log(`connected to product service at ${PORT}`); 
    });
}

export default app;
