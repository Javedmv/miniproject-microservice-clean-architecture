import express, { NextFunction, Response, Request, Application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 8002;

app.use(express.json());
app.use(cookieParser());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{ message: err?.message || "something went wrong" }]
    };
    
    // Using 'return' with a type assertion to suppress the error
    return (res.status(500).json(errorResponse) as unknown) as void;
});

app.listen(PORT, () => {
    console.log(`connect to admin service at http://localhost:${PORT}`);
});

export default app;
