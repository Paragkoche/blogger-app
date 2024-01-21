import {
  AdminTokenFunction,
  UserTokenFunction,
} from "@/types/authHelper.types";
import { log } from "./console";
import { verifyToken } from "@/utility/jwt";
import { AdminRepo, UserRepo } from "@/database";
export const AdminToken: AdminTokenFunction = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize",
      });
    }
    const JWTToken = token.split(" ").at(-1);
    if (!JWTToken) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize",
      });
    }
    const vJwtToken = verifyToken(JWTToken);
    if (typeof vJwtToken == "string") {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize or expired please re-Login",
      });
    }
    const AdminUser = await AdminRepo.findOneBy({ id: vJwtToken.id });
    if (!AdminUser) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize or expired please re-Login",
      });
    }
    req.AdminUser = AdminUser;
    return next();
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const UserToken: UserTokenFunction = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize",
      });
    }
    const JWTToken = token.split(" ").at(-1);
    if (!JWTToken) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize",
      });
    }
    const vJwtToken = verifyToken(JWTToken);
    if (typeof vJwtToken == "string") {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize or expired please re-Login",
      });
    }
    const User = await UserRepo.findOneBy({ id: vJwtToken.id });
    if (!User) {
      log("error", "[ERROR] token not found", req.headers);
      return res.status(401).json({
        message: "[ERROR] UnAuthorize or expired please re-Login",
      });
    }
    req.User = User;
    return next();
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
