import {
  AdminLoginApiFunction,
  AdminSingInApiFunction,
  AdminUpdateApiFunction,
} from "@/types/api.types";
import axios from "axios";

const URL_CSR = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;
const URL_SSR = `${process.env.BACKEND_URL}/api/v1`;

// * =============== CSR ( Client Side Rendering ) =================== * //

//TODO * ADMIN * USER * BLOG(ADMIN) * BLOG(USER)

//* ======== ADMIN =========
const AdminURL = `${URL_CSR}/admin`;
const AdminLoginUrl = `${AdminURL}/admin-login`;
const AdminSignUpUrl = `${AdminURL}/admin-sign-in`;
const AdminHomeDataUrl = `${AdminURL}/`;
const AdminUpdateDataUrl = `${AdminURL}/update-user`;
const AdminDeleteAccountUrl = `${AdminURL}/delete-account`;
export const AdminLogin: AdminLoginApiFunction = (data) => {
  return axios.post(AdminLoginUrl, data);
};
export const AdminSignUp: AdminSingInApiFunction = (data) => {
  return axios.post(AdminSignUpUrl, data);
};
export const AdminUpdate: AdminUpdateApiFunction = (data) => {
  return axios.put(AdminUpdateDataUrl, data);
};

//* ======== USER ==========
const UserUrl = `${URL_CSR}/user`;
const UserLoginUrl = `${UserUrl}/login-user`;
const UserSingInUrl = `${UserUrl}/sing-in-user`;
//* ======== BLOG |ADMIN| ==========
const BlogURL = `${URL_CSR}/blog`;
const AdminAddBlog = `${BlogURL}/add-blog`;
const AdminUpdateBlog = `${BlogURL}/update-blog`;
const AdminDeleteBlog = `${BlogURL}/delete-blog`;
//* ======== BLOG |USER| ==========
const UserAddLikeTOblog = `${BlogURL}/add-like`;
const userDeleteLikeToBlog = `${BlogURL}/delete-like`;
const userAddSub = `${BlogURL}/add-sub`;

// * =============== SSR ( Server Side Rendering ) =================== * //

//TODO * blogs

//* ======== BLOG =========
