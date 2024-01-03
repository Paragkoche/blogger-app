import { BlogRepo } from "@/database";
import { log } from "@/helpers/console";
import { HomeDataFunction } from "@/types/admin.controller.types";

export const HomeData: HomeDataFunction = async (req, res) => {
  try {
    const blogs = await BlogRepo.find({
      where: {
        admin: {
          id: req.AdminUser.id,
        },
      },
    });
    return res.json({
      data: {
        blogs,
      },
    });
  } catch (e) {
    log("error", "[server error]", e);
    return res.status(500).json({
      message: "[ERROR] Internal server error",
    });
  }
};
