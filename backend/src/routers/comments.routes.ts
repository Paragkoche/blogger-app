import {
  addCommentToBlog,
  addCommentToComment,
  addLikeToComment,
} from "@/controller/comments.controller";
import { UserToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();

router.post("/add-comment-to-blog", UserToken, addCommentToBlog);
router.post(
  "/add-comment-to-comment/:commentId",
  UserToken,
  addCommentToComment
);
router.post("/add-comment-link/:commentId", UserToken, addLikeToComment);

export default router;
