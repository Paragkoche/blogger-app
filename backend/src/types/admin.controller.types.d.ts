import { AdminRequest } from "@/interface/request.interface";
import type { Request, Response } from "express";

export type HomeDataFunction = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;

export type VerifyFunction = (req: AdminRequest, res: Response) => Response;
export type LogOutFunction = (req: AdminRequest, res: Response) => Response;
export type signInFunction = (req: Request, res: Response) => Promise<Response>;
export type LogInFunction = (req: Request, res: Response) => Promise<Response>;

export type UpdateAdminDataFunctionType = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;

export type DeleteAdminDataFunctionType = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;
