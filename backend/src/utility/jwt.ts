import jwt from "jsonwebtoken";
import env from "@/env";
const KEY = env.JWT_KEY || "";
export const verifyToken = (token: string) => jwt.verify(token, KEY);
export const createToken = (data: { id: string; role: "Admin" | "normal" }) =>
  jwt.sign(data, KEY);
