import type { Response } from "express";
import { UserRequest } from "@/interface/request.interface";

export type addCommentToBlogFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;
export type addCommentToCommentFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;

export type addCommentLikeFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;
