import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use(proxy("http://localhost:8001/"))

app.listen(PORT,() => {
    console.log(`gateway is listening to port:${PORT}`);
});