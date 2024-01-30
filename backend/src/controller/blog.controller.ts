import { AdminRepo, BlogRepo } from "@/database";
import {
  AddLinkBlogBody,
  AddSubBody,
  addBlogBody,
  deleteBlogBody,
  deleteLikeBody,
  updateBlogBody,
} from "@/helpers/body.validate";
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
import {
  AddBlogBodyType,
  AddLinkBlogBodyType,
  DeleteLikeBodyType,
  addSubBodyType,
  deleteBlogBodyType,
  updateBlogBodyType,
} from "@/types/body.type";

export const AddBlogController: AddBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    const body: AddBlogBodyType = addBlogBody.safeParse(req.body);
    if (!body.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        body.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const alreadyEexistBlog = await BlogRepo.find({
      where: {
        slug: body.data.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, ""),
        admin: {
          id: req.AdminUser.id,
        },
      },
      relations: {
        admin: true,
      },
    });

    if (alreadyEexistBlog.length !== 0) {
      return res.status(402).json({
        message: "[Repetition Error] Blog already existed!",
      });
    }

    const newBlog = await BlogRepo.save(
      BlogRepo.create({
        ...body.data,
        admin: req.AdminUser,
        slug: body.data.title
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, ""),
      })
    );

    return res.json({
      message: "[Info] Blog Added",
      data: newBlog,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
export const updateBlogController: AddBlogControllerFunctionType = async (
  req,
  res
) => {
  try {
    const body: updateBlogBodyType = updateBlogBody.safeParse(req.body);
    if (!body.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        body.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const blog_data = await BlogRepo.findOne({
      where: {
        id: body.data.id,
      },
    });
    if (!blog_data) {
      return res.status(404).json({
        message: "[ERROR] blog not found",
      });
    }
    const updateBlog = BlogRepo.save({
      ...blog_data,
      ...body.data,
    });
    return res.json({
      message: "[Info] Blog update",
      data: updateBlog,
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
    const body: AddLinkBlogBodyType = AddLinkBlogBody.safeParse(req.body);
    if (!body.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        body.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const blogExist = await BlogRepo.findOne({
      where: {
        id: body.data.id,
      },
      relations: {
        likeBy: true,
      },
    });
    if (!blogExist) {
      return res.status(404).json({
        message: "[Find Error] blog not find",
      });
    }
    if (blogExist.likeBy.some((user) => user.id == req.User.id)) {
      return res.status(402).json({
        message: "[Repetition Error] you already like this blog",
      });
    }
    blogExist.likeBy.push(req.User);
    const updateBlog = BlogRepo.save(blogExist);
    return res.json({
      message: "[Info] like added",
      data: updateBlog,
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
      const body: DeleteLikeBodyType = deleteLikeBody.safeParse(req.body);
      if (!body.success) {
        log("error", "Body data invalid", req.body);
        return res.status(402).json(
          body.error.issues.map((v) => ({
            message: v.message,
            label: v.path[0],
          }))
        );
      }
      const blogExist = await BlogRepo.findOne({
        where: {
          id: body.data.blogId,
        },
        relations: {
          likeBy: true,
        },
      });
      if (!blogExist) {
        return res.status(404).json({
          message: "[Find Error] blog not find",
        });
      }
      if (blogExist.likeBy.some((user) => user.id != req.User.id)) {
        return res.status(402).json({
          message: "[Repetition Error] you did not like this blog",
        });
      }
      blogExist.likeBy = blogExist.likeBy.filter((v) => v.id !== req.User.id);
      const updateBlog = BlogRepo.save(blogExist);
      return res.json({
        message: "[Info] Like removed successfully",
        data: updateBlog,
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
    const body: deleteBlogBodyType = deleteBlogBody.safeParse(req.body);
    if (!body.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        body.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const blogExist = await BlogRepo.findOne({
      where: {
        id: body.data.blogId,
      },
    });
    if (!blogExist) {
      return res.status(404).json({
        message: "[Find Error] blog not find",
      });
    }
    const _delete = await BlogRepo.delete(blogExist.id);

    return res.json({
      message: "[Info] Blog delete",
      data: _delete,
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
    const body: addSubBodyType = AddSubBody.safeParse(req.body);
    if (!body.success) {
      log("error", "Body data invalid", req.body);
      return res.status(402).json(
        body.error.issues.map((v) => ({
          message: v.message,
          label: v.path[0],
        }))
      );
    }
    const admin = await AdminRepo.findOne({
      where: {
        id: body.data.AdminId,
      },
      relations: {
        subs: true,
      },
    });
    if (!admin) {
      return res.status(404).json({
        message: "[Find Error] blog not find",
      });
    }
    if (admin.subs.some((user) => user.id == req.User.id)) {
      return res.status(402).json({
        message: "[Repetition Error] you already exists",
      });
    }
    admin.subs.push(req.User);
    const data = AdminRepo.save(admin);
    return res.json({
      message: "[Info] Subscribed successfully",
      data,
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
    const { username } = req.params;
    const data = await BlogRepo.find({
      where: {
        admin: {
          username,
        },
      },
      select: {
        admin: {
          id: true,
          username: true,
          joinedAt: true,
          bio: true,
        },
      },
      relations: {
        admin: true,
      },
    });
    return res.json({
      message: "[INFO] GATING ALL BLOGS",
      data,
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
    const { username, blog_slug } = req.params;
    const data = await BlogRepo.find({
      where: {
        admin: {
          username,
        },

        slug: blog_slug,
      },
      select: {
        admin: {
          id: true,
          username: true,
          joinedAt: true,
          bio: true,
        },
      },
      relations: {
        admin: true,
      },
    });
    return res.json({
      message: "[INFO] GATING  BLOGS",
      data,
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
