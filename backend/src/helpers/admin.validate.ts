import { z } from "zod";

export const SignInType = z.object({
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
  username: z.string().regex(/^[a-zA-Z0-9_]{3,20}$/, {
    message:
      "[Data Error] The username is not valid. Please ensure it contains only letters, numbers, and underscores, and is between 3 and 20 characters in length.",
  }),
  bio: z
    .string()
    .regex(/^.{1,500}$/, {
      message:
        "[Data Error] The biography is not valid. Please ensure it is between 1 and 500 characters in length.",
    })
    .optional(),
});
export const LoginType = z.object({
  emailId: z
    .string()
    .email({
      message:
        "[Data Error] The provided email address is not valid. Please ensure you have entered a correctly formatted email address.",
    })
    .optional(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "[Data Error] Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@, $, !, %, *, ?, or &).",
      }
    ),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9_]{3,20}$/, {
      message:
        "[Data Error] The username is not valid. Please ensure it contains only letters, numbers, and underscores, and is between 3 and 20 characters in length.",
    })
    .optional(),
});

export const UpdateAdminType = z.object({
  bio: z
    .string()
    .regex(/^.{1,500}$/, {
      message:
        "[Data Error] The biography is not valid. Please ensure it is between 1 and 500 characters in length.",
    })
    .optional(),
});
