import { LogInController, SingIn } from "@/controller/User.controller";
import { Router } from "express";

const router = Router();

router.post("/login-user",LogInController);
router.post("/sing-in-user",SingIn);

export default router;
