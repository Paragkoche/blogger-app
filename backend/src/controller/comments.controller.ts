import { BlogRepo, CommentRepo } from "@/database";
import { addCommentToBlogBody } from "@/helpers/body.validate";
import { log } from "@/helpers/console";
import { addCommentBody } from "@/types/body.type";
import {
  addCommentLikeFunctionType,
  addCommentToCommentFunctionType,
} from "@/types/comment.controller.types";

export const addCommentToBlog: addCommentLikeFunctionType = async (
  req,
  res
) => {
  try {
    const commentBody: addCommentBody = addCommentToBlogBody.safeParse(
      req.body
    );
    if (!commentBody.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        commentBody.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const blog_data = await BlogRepo.findOne({
      where: { id: commentBody.data.blogId },
    });
    if (!blog_data) {
      return res.status(404).json({
        message: "[Not Fount] blog not found",
      });
    }
    const data = await CommentRepo.save(
      CommentRepo.create({
        ...commentBody.data,
        blog: [blog_data],
        user: req.User,
      })
    );
    return res.json({
      message: "[Info] comment add",
      data: data,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const addCommentToComment: addCommentToCommentFunctionType = async (
  req,
  res
) => {
  try {
    const { commentId } = req.params;
    const commentBody: addCommentBody = addCommentToBlogBody.safeParse(
      req.body
    );
    if (!commentBody.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        commentBody.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const blog_data = await BlogRepo.findOne({
      where: { id: commentBody.data.blogId },
    });
    if (!blog_data) {
      return res.status(404).json({
        message: "[Not Fount] blog not found",
      });
    }
    const CommentExt = await CommentRepo.find({
      where: {
        id: commentId,
      },
    });
    if (CommentExt.length === 0) {
      return res.status(404).json({
        message: "[Error] comment not found",
      });
    }

    const data = await CommentRepo.save(
      CommentRepo.create({
        ...commentBody.data,
        blog: [blog_data],
        user: req.User,
      })
    );
    CommentExt[0].comments.push(data);
    const _data = await CommentRepo.save(CommentExt[0]);
    return res.json({
      message: "[Info] comment add",
      data: _data,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const addLikeToComment: addCommentLikeFunctionType = async (
  req,
  res
) => {
  try {
    const { commentId } = req.params;

    const CommentExt = await CommentRepo.find({
      where: {
        id: commentId,
      },
    });
    if (CommentExt.length === 0) {
      return res.status(404).json({
        message: "[Error] comment not found",
      });
    }

    CommentExt[0].likes.push(req.User);
    const _data = await CommentRepo.save(CommentExt[0]);
    return res.json({
      message: "[Info] like add",
      data: _data,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
