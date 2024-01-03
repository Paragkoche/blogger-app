import express from "express";
import Cors from "cors";
import AllRouterV1 from "@/routers/index.routes";
const app = express();
app.use(express.json());
app.use(Cors());

app.use("/api/v1", AllRouterV1);

export default app;
