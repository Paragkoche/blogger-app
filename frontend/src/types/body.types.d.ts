import {
  AdminAddBlogBody,
  AdminDeleteBlogBody,
  AdminLoginBody,
  AdminSingInBody,
  AdminUpdateBody,
  CommentToBlogBody,
  CommentToCommentBody,
  UserAddLikeBlogBody,
  UserDeleteLikeBlogBody,
  UserSubBlogBody,
} from "@/api/body.types";
import { z } from "zod";
export type AdminLoginBodyType = z.infer<typeof AdminLoginBody>;
export type AdminSingInBodyType = z.infer<typeof AdminSingInBody>;
export type AdminUpdateBodyType = z.infer<typeof AdminUpdateBody>;
export type AdminAddBlogBodyType = z.infer<typeof AdminAddBlogBody>;
export type AdminUpdateBlogBodyType = z.infer<typeof AdminUpdateBody>;
export type AdminDeleteBlogBodyType = z.infer<typeof AdminDeleteBlogBody>;
export type UserAddLikeBlogBodyType = z.infer<typeof UserAddLikeBlogBody>;
export type UserDeleteLikeBlogBodyType = z.infer<typeof UserDeleteLikeBlogBody>;
export type UserSubBlogBodyType = z.infer<typeof UserSubBlogBody>;
export type UserAddCommentToBlogType = z.infer<typeof CommentToBlogBody>;
export type UserAddCommentToCommentBlogType = z.infer<
  typeof CommentToCommentBody
>;
