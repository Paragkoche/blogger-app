import {
  LoginType,
  SignInType,
  UpdateAdminType,
} from "@/helpers/admin.validate";
import {
  AddLinkBlogBody,
  AddSubBody,
  addBlogBody,
  addCommentToBlogBody,
  deleteBlogBody,
  deleteLikeBody,
} from "@/helpers/body.validate";
import { UserLoginType, UserSignInType } from "@/helpers/user.validate";
import { z } from "zod";

export type AdminSingInBodyType = z.SafeParseReturnType<
  z.infer<typeof SignInType>,
  z.infer<typeof SignInType>
>;
export type AdminLogInBodyType = z.SafeParseReturnType<
  z.infer<typeof LoginType>,
  z.infer<typeof LoginType>
>;

export type UserSingInBodyType = z.SafeParseReturnType<
  z.infer<typeof UserSignInType>,
  z.infer<typeof UserSignInType>
>;
export type UserLogInBodyType = z.SafeParseReturnType<
  z.infer<typeof UserLoginType>,
  z.infer<typeof UserLoginType>
>;

export type AddBlogBodyType = z.SafeParseReturnType<
  z.infer<typeof addBlogBody>,
  z.infer<typeof addBlogBody>
>;

export type AddLinkBlogBodyType = z.SafeParseReturnType<
  z.infer<typeof AddLinkBlogBody>,
  z.infer<typeof AddLinkBlogBody>
>;
export type DeleteLikeBodyType = z.SafeParseReturnType<
  z.infer<typeof deleteLikeBody>,
  z.infer<typeof deleteLikeBody>
>;
export type deleteBlogBodyType = z.SafeParseReturnType<
  z.infer<typeof deleteBlogBody>,
  z.infer<typeof deleteBlogBody>
>;

export type addSubBodyType = z.SafeParseReturnType<
  z.infer<typeof AddSubBody>,
  z.infer<typeof AddSubBody>
>;

export type AdminUpdateBodyType = z.SafeParseReturnType<
  z.infer<typeof UpdateAdminType>,
  z.infer<typeof UpdateAdminType>
>;

export type addCommentBody = z.SafeParseReturnType<
  z.infer<typeof addCommentToBlogBody>,
  z.infer<typeof addCommentToBlogBody>
>;
