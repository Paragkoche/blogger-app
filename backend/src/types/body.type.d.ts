import { LoginType, SignInType } from "@/helpers/admin.validate";
import { UserLoginType, UserSignInType } from "@/helpers/user.validate";
import { z } from "zod";

export type AdminSingInBodyType = z.SafeParseReturnType<
  z.infer<typeof SignInType>,
  z.infer<typeof SignInType>
>;
export type AdminLogInBodyType = z.SafeParseReturnType<
z.infer<typeof LoginType>,
z.infer<typeof LoginType>
>

export type UserSingInBodyType = z.SafeParseReturnType<
z.infer<typeof UserSignInType>,
z.infer<typeof UserSignInType>

>
export type UserLogInBodyType = z.SafeParseReturnType<
z.infer<typeof UserLoginType>,
z.infer<typeof UserLoginType>

>