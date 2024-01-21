import { HomeData, LogInController, SignIn } from "@/controller/Admin.controller";
import { AdminToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
router.get("/", AdminToken, HomeData);
// auth
router.post("/admin-login",LogInController);
router.post("/admin-sign-in", SignIn);
// blog
router.post("/admin-add-blog");
router.delete("/admin-delete-blog");
router.put("/admin-update-blog");
export default router;
