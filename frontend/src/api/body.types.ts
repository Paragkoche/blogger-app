import { z } from "zod";

export const AdminLoginBody = z.object({
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

export const AdminSingInBody = z.object({
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
export const AdminUpdateBody = z.object({
  bio: z
    .string()
    .regex(/^.{1,500}$/, {
      message:
        "[Data Error] The biography is not valid. Please ensure it is between 1 and 500 characters in length.",
    })
    .optional(),
});
export const AdminAddBlogBody = z.object({
  title: z
    .string()
    .min(1, {
      message: "[Data Error] Title must me 1 to 250 charter",
    })
    .max(250, {
      message: "[Data Error] Title must me 1 to 250 charter",
    }),
  image: z.string().url({
    message: "[Data Error] Image not upload place re-upload it",
  }),
  description: z
    .string()
    .trim()
    .max(5000, {
      message: "[Data Error] Title must me 1 to 250 charter",
    })
    .regex(
      /^(#{1,6})\s+(.+)$|^\s*\*\s+(.+)$|^\s*\d+\.\s+(.+)$|(\[.+?\])\((.+?)\)/gm,
      {
        message: "[Data Error] description always Mark down formant",
      }
    ),
});
export const AdminUpdateBlogBody = z.object({
  id: z.string().uuid({
    message: "[Data Error] blog id not valid",
  }),
  title: z
    .string()
    .min(1, {
      message: "[Data Error] Title must me 1 to 250 charter",
    })
    .max(250, {
      message: "[Data Error] Title must me 1 to 250 charter",
    })
    .optional(),
  image: z
    .string()
    .url({
      message: "[Data Error] Image not upload place re-upload it",
    })
    .optional(),
  description: z
    .string()
    .trim()
    .max(5000, {
      message: "[Data Error] Title must me 1 to 250 charter",
    })
    .regex(
      /^(#{1,6})\s+(.+)$|^\s*\*\s+(.+)$|^\s*\d+\.\s+(.+)$|(\[.+?\])\((.+?)\)/gm,
      {
        message: "[Data Error] description always Mark down formant",
      }
    )
    .optional(),
});
export const AdminDeleteBlogBody = z.object({
  blogId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});
export const UserAddLikeBlogBody = z.object({
  id: z.string().uuid({
    message: "[Data Error] id is not valid or not uuid",
  }),
});

export const UserDeleteLikeBlogBody = z.object({
  blogId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});

export const UserSubBlogBody = z.object({
  blogId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});
