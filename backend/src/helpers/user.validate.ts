import {z} from "zod"

export const UserSignInType = z.object({
    emailId: z.string().email({
        message:
          "[Data Error] The provided email address is not valid. Please ensure you have entered a correctly formatted email address.",
      }),
      password: z
        .string()
        .regex(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          {
            message:
              "[Data Error] Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, or &).",
          }
        ),
})
export const UserLoginType = z.object({
    emailId: z.string().email({
        message:
          "[Data Error] The provided email address is not valid. Please ensure you have entered a correctly formatted email address.",
      }),
      password: z
        .string()
        .regex(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          {
            message:
              "[Data Error] Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, or &).",
          }
        ),
})