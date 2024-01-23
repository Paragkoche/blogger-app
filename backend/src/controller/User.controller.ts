import { UserRepo } from "@/database";
import { log } from "@/helpers/console";
import { UserLoginType, UserSignInType } from "@/helpers/user.validate";
import { UserLogInBodyType, UserSingInBodyType } from "@/types/body.type";
import { LoginFunction, SignInFunction } from "@/types/user.controller.types";
import { createToken } from "@/utility/jwt";
import { password_verify } from "@/utility/password";

export const SingIn: SignInFunction = async (req, res) => {
  try {
    const UserDataBody: UserSingInBodyType = UserSignInType.safeParse(req.body);
    if (!UserDataBody.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        UserDataBody.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const UserData = await UserRepo.findOne({
      where: {
        emailId: UserDataBody.data.emailId,
      },
    });
    if (UserData) {
      return res.status(401).json({
        message: "[error] email Id or username already exits",
      });
    }
    const newUserData = await UserRepo.save(UserRepo.create(UserDataBody.data));
    res.cookie(
      "token",
      createToken({
        id: newUserData.id,
        role: "normal",
      }),
      {
        httpOnly: true,
      }
    );
    return res.json({
      message: "[Info] User create",
      data: newUserData,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const LogInController: LoginFunction = async (req, res) => {
  try {
    const UserDataBody: UserLogInBodyType = UserLoginType.safeParse(req.body);
    if (!UserDataBody.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        UserDataBody.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const UserData = await UserRepo.findOne({
      where: {
        emailId: UserDataBody.data.emailId,
      },
    });
    if (!UserData) {
      return res.status(401).json({
        message: "[error] email Id or username Not exists",
      });
    }
    const verifyPassword = await password_verify(
      UserDataBody.data.password,
      UserData.password
    );
    if (!verifyPassword) {
      return res.status(401).json({
        message: "[error] password not valid",
      });
    }
    res.cookie(
      "token",
      createToken({
        id: UserData.id,
        role: "normal",
      })
    );
    log("info", "User login", `[${UserData.id}]`);
    return res.json({
      message: "[Info] User Login",
      data: UserData,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
