import { Router } from "express";
import AdminRouter from "./admin.routes";
import BlogsRouter from "./blog.routes";
import CommentRouter from "./comments.routes";
import UserRouter from "./users.routes"
const router = Router();
router.use("/admin", AdminRouter);
router.use("/blog",BlogsRouter);
router.use("/comment",CommentRouter);
router.use("/user",UserRouter);
export default router;
