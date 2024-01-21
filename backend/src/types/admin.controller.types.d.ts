import { AdminRequest } from "@/interface/request.interface";
import type { Request, Response } from "express";

export type HomeDataFunction = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;

export type signInFunction = (req: Request, res: Response) => Promise<Response>;
export type LogInFunction = (req: Request, res: Response) => Promise<Response>;

