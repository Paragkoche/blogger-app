import {
  LogInController,
  LogOutController,
  SingIn,
  verifyController,
} from "@/controller/User.controller";
import { UserToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();

router.post("/login-user", LogInController);
router.post("/sing-in-user", SingIn);
router.get("/verify", UserToken, verifyController);
router.post("/log-out", UserToken, LogOutController);

export default router;
