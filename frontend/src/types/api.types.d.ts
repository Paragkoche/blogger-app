import { Axios } from "axios";
import {
  AdminLoginBodyType,
  AdminSingInBodyType,
  AdminUpdateBodyType,
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

// BLOG

export type BlogAddApiFunction = (data: {}) => Promise<Axios>;
