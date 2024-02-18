import { Axios, Axios } from "axios";
import {
  AdminAddBlogBodyType,
  AdminDeleteBlogBodyType,
  AdminLoginBodyType,
  AdminSingInBodyType,
  AdminUpdateBodyType,
  UserAddLikeBlogBodyType,
  UserDeleteLikeBlogBodyType,
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
export type UserSubBlogApiFunction = () => Promise<Axios>;
