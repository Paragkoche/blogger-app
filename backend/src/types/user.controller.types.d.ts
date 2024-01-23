import type {
    Request,
    Response
} from "express";

export type SignInFunction = (req:Request,res:Response)=>Promise<Response>;
export type LoginFunction = (req:Request,res:Response)=>Promise<Response>