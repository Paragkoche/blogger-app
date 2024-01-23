import { log } from "@/helpers/console";
import {
  AddBlogControllerFunctionType,
  AddLikeBlogControllerFunctionType,
  AddSubBlogControllerFunctionType,
  DeleteBlogControllerFunctionType,
  DeleteLikeBlogControllerFunctionType,
  GetAllBlogsControllerFunctionType,
  GetBlogControllerFunctionType,
} from "@/types/blog.controller.types";

export const AddBlogController: AddBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};

export const AddLikeBlogController: AddLikeBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
export const DeleteLikeBlogController: DeleteLikeBlogControllerFunctionType =
  async (req, res) => {
    try {
      return res.json({
        message: "[]",
      });
    } catch (e) {
      log("error", "[server error]", e);
      return res.status(500).json({
        message: "[ERROR] Internal server error",
      });
    }
  };

export const DeleteBlogController: DeleteBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
export const AddSubBlogsController: AddSubBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
export const GetAllBlogsController: GetAllBlogsControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
export const GetBlogController: GetBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    return res.json({
      message: "[]",
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
