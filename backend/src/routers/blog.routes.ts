import { AdminToken, UserToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
router.post("/add-blog", AdminToken);
router.post("/add-like", UserToken);
router.delete("/delete-like", UserToken);
router.delete("/delete-blog", AdminToken);
router.post("/add-sub", UserToken);
router.get("/:username/:blog-slug");
router.get("/:username");

export default router;
