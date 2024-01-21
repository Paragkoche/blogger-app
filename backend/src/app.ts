import express from "express";
import Cors from "cors";
import cookie from "cookie-parser"
import AllRouterV1 from "@/routers/index.routes";
const app = express();
app.use(express.json());
app.use(cookie())
app.use(Cors());
app.use("/api/v1", AllRouterV1);

export default app;
