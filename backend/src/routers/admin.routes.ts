import { HomeData } from "@/controller/Admin.controller";
import { AdminToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
router.get("/", AdminToken, HomeData);
router.post("/admin-login");
router.post("/admin-signing");

export default router;
