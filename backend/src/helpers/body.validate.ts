import { z } from "zod";

export const addBlogBody = z.object({
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

export const AddLinkBlogBody = z.object({
  id: z.string().uuid({
    message: "[Data Error] id is not valid or not uuid",
  }),
});

export const deleteLikeBody = z.object({
  blogId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});
export const deleteBlogBody = z.object({
  blogId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});

export const AddSubBody = z.object({
  AdminId: z.string().uuid({
    message: "[Data Error] is not valid blog Id or uuid",
  }),
});

export const addCommentToBlogBody = z.object({
  comment: z.string().min(1, {
    message: "[Data Error] comment not valid or minim 1 charter",
  }),
});
