import { AdminRepo, BlogRepo } from "@/database";
import { LoginType, SignInType } from "@/helpers/admin.validate";
import { log } from "@/helpers/console";
import {
  HomeDataFunction,
  LogInFunction,
  signInFunction,
} from "@/types/admin.controller.types";
import { AdminLogInBodyType, AdminSingInBodyType } from "@/types/body.type";
import { createToken } from "@/utility/jwt";
import { password_verify } from "@/utility/password";

export const HomeData: HomeDataFunction = async (req, res) => {
  try {
    const subs = await AdminRepo.find({
      where:{
        id:req.AdminUser.id
      },
      relations:{
        subs:true
      },
    })
    const blogs = await BlogRepo.find({
      where: {
        admin: {
          id: req.AdminUser.id,
        },
      },
    });
    return res.json({
      data: {
        blogs,
        subs:subs[0].subs,
      },
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const SignIn: signInFunction = async (req, res) => {
  try {
    const UserDataBody: AdminSingInBodyType = SignInType.safeParse(req.body);
    if (!UserDataBody.success) {
      log("error", "Body data invalid", req.body);
      return res
        .status(402)
        .json(
          UserDataBody.error.issues.map((v) => ({
            message: v.message,
            label: v.path[0],
          }))
        );
    }
    const UserData =await AdminRepo.findOne({
      where:[
        {
          username:UserDataBody.data.username
        },
        {
          emailId:UserDataBody.data.emailId
        }
      ],
    });
    if(UserData){
      return res.status(401).json({
        message:"[error] email Id or username already exits"
      })
    }
    const newUserData = await AdminRepo.save(
      AdminRepo.create(
        UserDataBody.data
      )
    );
      res.cookie("token",createToken({
        id:newUserData.id,
        role:"Admin"
      }),{
        httpOnly:true
      })
    return res.json({
      message:'[Info] User create',
      data:newUserData
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const LogInController:LogInFunction =async(req,res)=>{
  try {
    const UserDataBody: AdminLogInBodyType = LoginType.safeParse(req.body);
    if (!UserDataBody.success) {
      log("error", "Body data invalid", req.body);
      return res
        .status(402)
        .json(
          UserDataBody.error.issues.map((v) => ({
            message: v.message,
            label: v.path[0],
          }))
        );
    }
    const UserData =await AdminRepo.findOne({
      where:[
        {
          username:UserDataBody.data.username
        },
        {
          emailId:UserDataBody.data.emailId
        } 
      ],  
    });
    if(!UserData){
      return res.status(401).json({
        message:"[error] email Id or username Not exists"
      })
    }
    const verifyPassword =await password_verify(UserDataBody.data.password,UserData.password);
    if(!verifyPassword){
      return res.status(401).json({
        message:"[error] password not valid"
      })
    }
    res.cookie("token",createToken({
      id:UserData.id,
      role:'Admin'
    }));
    log("info","User login",`[${UserData.id}]`);
    return res.json({
      message:'[Info] User Login',
      data:UserData
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
}

