import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import initWebRoutes from "./routes/initWebRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
connectDb();
initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
