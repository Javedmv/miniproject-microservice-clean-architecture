import express, {NextFunction ,Response, Request, Application} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { authRoute } from "../infrastructure/routes/authRoute";
import { dependecies } from "../config/dependencies";

dotenv.config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 8001;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/',authRoute(dependecies))

app.use((err:Error, req: Request,res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{message: err?.message || "something went wrong"}]
    };
    return res.status(500).json(errorResponse)
});

app.listen(PORT,() => {
    console.log(`connect to auth service defaultly at http://localhost:${PORT}`);
});

export default app;