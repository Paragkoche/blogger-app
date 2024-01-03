import { Admin, Users, blogs, comments } from "./tables";
import db from "./db";

export const AdminRepo = db.getRepository(Admin);
export const UserRepo = db.getRepository(Users);
export const BlogRepo = db.getRepository(blogs);
export const CommentRepo = db.getRepository(comments);
