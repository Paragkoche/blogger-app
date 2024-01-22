import { LoginType, SignInType } from "@/helpers/admin.validate";
import { z } from "zod";

export type AdminSingInBodyType = z.SafeParseReturnType<
  z.infer<typeof SignInType>,
  z.infer<typeof SignInType>
>;
export type AdminLogInBodyType = z.SafeParseReturnType<
z.infer<typeof LoginType>,
z.infer<typeof LoginType>
>