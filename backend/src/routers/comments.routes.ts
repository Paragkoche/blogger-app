import { UserToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
//? future plan
router.post("/add-comment-to-blog", UserToken);
router.post("/add-comment-to-comment/:commentId", UserToken);
router.post("/add-comment-link/:commentId", UserToken);

export default router;
