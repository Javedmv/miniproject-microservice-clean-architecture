import express, {NextFunction ,Response, Request, Application} from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

dotenv.config();

const app: Application = express();
const PORT: Number = Number(process.env.PORT) || 8002;

app.use(express.json());
app.use(cookieParser())


app.use((err:Error, req: Request,res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
        errors: [{message: err?.message || "something went wrong"}]
    };
    res.status(500).json(errorResponse)
});


app.listen(PORT,() => {
    console.log(`connect to admin service defaultly at http://localhost:${PORT}`);
});

export default app;