import { Axios, Axios } from "axios";
import {
  AdminAddBlogBodyType,
  AdminDeleteBlogBodyType,
  AdminLoginBodyType,
  AdminSingInBodyType,
  AdminUpdateBodyType,
  UserAddCommentToBlogType,
  UserAddCommentToCommentBlogType,
  UserAddLikeBlogBodyType,
  UserDeleteLikeBlogBodyType,
  UserSubBlogBodyType,
} from "./body.types";

//Admin

export type AdminLoginApiFunction = (
  data: AdminLoginBodyType
) => Promise<Axios>;
export type AdminSingInApiFunction = (
  data: AdminSingInBodyType
) => Promise<Axios>;
export type AdminUpdateApiFunction = (
  data: AdminUpdateBodyType
) => Promise<Axios>;
export type AdminDeleteApiFunction = () => Promise<Axios>;
export type AdminHomeApiFunction = () => Promise<Axios>;

// BLOG Admin

export type BlogAddApiFunction = (data: AdminAddBlogBodyType) => Promise<Axios>;
export type BlogUpdateApiFunction = (
  data: AdminUpdateApiFunction
) => Promise<Axios>;
export type BlogDeleteApiFunction = (
  data: AdminDeleteBlogBodyType
) => Promise<Axios>;

// BLOG User

export type BlogAddLikeApiFunction = (
  data: UserAddLikeBlogBodyType
) => Promise<Axios>;
export type BlogDeleteLikeApiFunction = (
  data: UserDeleteLikeBlogBodyType
) => Promise<Axios>;
export type UserSubBlogApiFunction = (
  data: UserSubBlogBodyType
) => Promise<Axios>;

//Blog

export type GetAllBlogByUsername = (data: {
  username: string;
}) => Promise<Axios>;
export type GetBlog = (data: {
  username: string;
  blog_slug: string;
}) => Promise<Axios>;

//Comments
export type UserAddCommentTOBlogApiFunction = (
  data: UserAddCommentToBlogType
) => Promise<Axios>;
export type UserAddCommentTOCommentApiFunction = (
  data: UserAddCommentToCommentBlogType
) => Promise<Axios>;
export type UserAddCommentLikeApiFunction = () => Promise<Axios>;
