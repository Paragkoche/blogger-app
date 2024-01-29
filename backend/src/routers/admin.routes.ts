import {
  HomeData,
  LogInController,
  SignIn,
  UpdateAdminData,
  deleteAdminAccount,
} from "@/controller/Admin.controller";
import { AdminToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
//HOME
router.get("/", AdminToken, HomeData);
// auth
router.post("/admin-login", LogInController);
router.post("/admin-sign-in", SignIn);
router.put("/update-user", AdminToken, UpdateAdminData);
router.delete("/delete-account", AdminToken, deleteAdminAccount);
export default router;
