import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CONSTANTS } from "./config/constant";
import router from "./api/router";
const app = express();
// enable options response
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

// use routes
app.use(CONSTANTS.API.PREFIX, router);

export default app;
