import express from "express";
import dotenv from "dotenv";
import connectDb from "./db.js";
import initWebRoutes from "./routes/initWebRoutes.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(express.json());
connectDb();
initWebRoutes(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
