import { AxiosResponse } from "axios";
import {
  AdminAddBlogBodyType,
  AdminDeleteBlogBodyType,
  AdminLoginBodyType,
  AdminSingInBodyType,
  AdminUpdateBlogBodyType,
  AdminUpdateBodyType,
  UserAddCommentToBlogType,
  UserAddCommentToCommentBlogType,
  UserAddLikeBlogBodyType,
  UserDeleteLikeBlogBodyType,
  UserLoginBodyType,
  UserSingInBodyType,
  UserSubBlogBodyType,
} from "./body.types";

// User
export type UserLoginApiFunction = (
  data: UserLoginBodyType
) => Promise<AxiosResponse>;
export type UserSingInApiFunction = (
  data: UserSingInBodyType
) => Promise<AxiosResponse>;

//Admin

export type AdminLoginApiFunction = (
  data: AdminLoginBodyType
) => Promise<AxiosResponse>;
export type AdminSingInApiFunction = (
  data: AdminSingInBodyType
) => Promise<AxiosResponse>;
export type AdminUpdateApiFunction = (
  data: AdminUpdateBodyType
) => Promise<AxiosResponse>;
export type AdminDeleteApiFunction = () => Promise<AxiosResponse>;
export type AdminHomeApiFunction = () => Promise<AxiosResponse>;

// BLOG Admin

export type BlogAddApiFunction = (
  data: AdminAddBlogBodyType
) => Promise<AxiosResponse>;
export type BlogUpdateApiFunction = (
  data: AdminUpdateBlogBodyType
) => Promise<AxiosResponse>;
export type BlogDeleteApiFunction = (
  data: AdminDeleteBlogBodyType
) => Promise<AxiosResponse>;

// BLOG User

export type BlogAddLikeApiFunction = (
  data: UserAddLikeBlogBodyType
) => Promise<AxiosResponse>;
export type BlogDeleteLikeApiFunction = (
  data: UserDeleteLikeBlogBodyType
) => Promise<AxiosResponse>;
export type UserSubBlogApiFunction = (
  data: UserSubBlogBodyType
) => Promise<AxiosResponse>;

//Blog

export type GetAllBlogByUsername = (data: {
  username: string;
}) => Promise<AxiosResponse>;
export type GetBlog = (data: {
  username: string;
  blog_slug: string;
}) => Promise<AxiosResponse>;

export type searchBLog = (data: { search: string }) => Promise<AxiosResponse>;
export type TopBlog = () => Promise<AxiosResponse>;
//Comments
export type UserAddCommentTOBlogApiFunction = (
  data: UserAddCommentToBlogType
) => Promise<AxiosResponse>;
export type UserAddCommentTOCommentApiFunction = (
  data: UserAddCommentToCommentBlogType
) => Promise<AxiosResponse>;
export type UserAddCommentLikeApiFunction = () => Promise<AxiosResponse>;
