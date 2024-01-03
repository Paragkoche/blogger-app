import { Router } from "express";
import AdminRouter from "./admin.routes";
const router = Router();
router.use("/admin", AdminRouter);
export default router;
