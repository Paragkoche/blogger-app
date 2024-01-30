import {
  AddBlogController,
  AddLikeBlogController,
  AddSubBlogsController,
  DeleteBlogController,
  DeleteLikeBlogController,
  GetAllBlogsController,
  GetBlogController,
  updateBlogController,
} from "@/controller/blog.controller";
import { AdminToken, UserToken } from "@/helpers/auth.helper";
import { Router } from "express";

const router = Router();
router.post("/add-blog", AdminToken, AddBlogController);
router.post("/add-like", UserToken, AddLikeBlogController);
router.delete("/delete-like", UserToken, DeleteLikeBlogController);
router.delete("/delete-blog", AdminToken, DeleteBlogController);
router.post("/add-sub", UserToken, AddSubBlogsController);
router.put("/update-blog", AdminToken, updateBlogController);
router.get("/:username", GetAllBlogsController);
router.get("/:username/:blog_slug", GetBlogController);

export default router;
