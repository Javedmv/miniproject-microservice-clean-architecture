import express, {Request,Response, NextFunction, Application} from 'express';
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';

dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT || 8003);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{message: err?.message || "somethig went wrong"}]
    }
    res.status(500).json(errorResponse)
})

app.listen(PORT,() => {
    console.log("connected to product service at http://localhost:",PORT);
})

export default app;