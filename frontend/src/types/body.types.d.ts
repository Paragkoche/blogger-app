import {
  AdminLoginBody,
  AdminSingInBody,
  AdminUpdateBody,
} from "@/api/body.types";
import { z } from "zod";
export type AdminLoginBodyType = z.infer<typeof AdminLoginBody>;
export type AdminSingInBodyType = z.infer<typeof AdminSingInBody>;
export type AdminUpdateBodyType = z.infer<typeof AdminUpdateBody>;
