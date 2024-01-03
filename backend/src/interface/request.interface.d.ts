import { Admin, Users } from "@/database/tables";
import { Request } from "express";
export interface AdminRequest extends Request {
  AdminUser: Admin;
}
export interface UserRequest extends Request {
  User: Users;
}
