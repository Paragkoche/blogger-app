import { AdminRequest, UserRequest } from "@/interface/request.interface";
import type { Request, Response } from "express";

export type SearchBlogControllerFunctionType = (
  req: Request,
  res: Response
) => Promise<Response>;
export type TopBlogControllerFunctionType = (
  req: Request,
  res: Response
) => Promise<Response>;

export type AddBlogControllerFunctionType = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;
export type AddLikeBlogControllerFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;

export type DeleteLikeBlogControllerFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;

export type DeleteBlogControllerFunctionType = (
  req: AdminRequest,
  res: Response
) => Promise<Response>;

export type AddSubBlogControllerFunctionType = (
  req: UserRequest,
  res: Response
) => Promise<Response>;

export type GetAllBlogsControllerFunctionType = (
  req: Request,
  res: Response
) => Promise<Response>;

export type GetBlogControllerFunctionType = (
  req: Request,
  res: Response
) => Promise<Response>;
