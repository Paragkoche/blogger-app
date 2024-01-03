import { Admin, Users } from "@/database/tables";
import { AdminRequest, UserRequest } from "@/interface/request.interface";
import type { NextFunction, Response } from "express";

export type AdminTokenFunction = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => Promise<Response | ReturnType<NextFunction>>;

export type UserTokenFunction = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => Promise<Response | ReturnType<NextFunction>>;
