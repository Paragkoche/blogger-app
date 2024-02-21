import {
  AdminDeleteApiFunction,
  AdminHomeApiFunction,
  AdminLoginApiFunction,
  AdminSingInApiFunction,
  AdminUpdateApiFunction,
  BlogAddApiFunction,
  BlogAddLikeApiFunction,
  BlogDeleteApiFunction,
  BlogDeleteLikeApiFunction,
  BlogUpdateApiFunction,
  GetAllBlogByUsername,
  GetBlog,
  UserLoginApiFunction,
  UserSingInApiFunction,
  UserSubBlogApiFunction,
} from "@/types/api.types";
import axios from "axios";

const URL_CSR = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;
const URL_SSR = `${process.env.BACKEND_URL}/api/v1`;

// * =============== CSR ( Client Side Rendering ) =================== * //

//* ======== ADMIN =========
const AdminURL = `${URL_CSR}/admin`;
const AdminLoginUrl = `${AdminURL}/admin-login`;
const AdminSignUpUrl = `${AdminURL}/admin-sign-in`;
const AdminHomeDataUrl = `${AdminURL}/`;
const AdminUpdateDataUrl = `${AdminURL}/update-user`;
const AdminVerifyUrl = `${AdminURL}/verify`;
const AdminLogOutUrl = `${AdminURL}/log-out`;
const AdminDeleteAccountUrl = `${AdminURL}/delete-account`;

export const AdminLogin: AdminLoginApiFunction = (data) => {
  return axios.post(AdminLoginUrl, data);
};
export const AdminSignUp: AdminSingInApiFunction = (data) => {
  return axios.post(AdminSignUpUrl, data);
};
export const AdminUpdate: AdminUpdateApiFunction = (data) => {
  return axios.put(AdminUpdateDataUrl, data, {
    withCredentials: true,
  });
};
export const AdminDelete: AdminDeleteApiFunction = () => {
  return axios.delete(AdminDeleteAccountUrl, {
    withCredentials: true,
  });
};
export const AdminHome: AdminHomeApiFunction = () => {
  return axios.get(AdminHomeDataUrl, {
    withCredentials: true,
  });
};
export const AdminVerify = () => {
  return axios.get(AdminVerifyUrl, {
    withCredentials: true,
  });
};
export const AdminLogOut = () => {
  return axios.get(AdminLogOutUrl, {
    withCredentials: true,
  });
};

//* ======== USER ==========
const UserUrl = `${URL_CSR}/user`;
const UserLoginUrl = `${UserUrl}/login-user`;
const UserSingInUrl = `${UserUrl}/sing-in-user`;
const UserVerifyUrl = `${UserUrl}/verify`;
const UserLogOutUrl = `${UserUrl}/log-out`;
export const UserLogin: UserLoginApiFunction = (data) => {
  return axios.post(UserLoginUrl, data, { withCredentials: true });
};
export const UserSingIn: UserSingInApiFunction = (data) => {
  return axios.post(UserSingInUrl, data, { withCredentials: true });
};
export const UserVerify = () => {
  return axios.get(UserVerifyUrl, {
    withCredentials: true,
  });
};
export const UserLogOut = () => {
  return axios.get(UserLogOutUrl, {
    withCredentials: true,
  });
};
//* ======== BLOG |ADMIN| ==========
const BlogURL = `${URL_CSR}/blog`;
const AdminAddBlogUrl = `${BlogURL}/add-blog`;
const AdminUpdateBlogUrl = `${BlogURL}/update-blog`;
const AdminDeleteBlogUrl = `${BlogURL}/delete-blog`;
export const AdminAddBlog: BlogAddApiFunction = (data) => {
  return axios.post(AdminAddBlogUrl, data, { withCredentials: true });
};
export const AdminUpdateBlog: BlogUpdateApiFunction = (data) => {
  return axios.put(AdminUpdateBlogUrl, data, {
    withCredentials: true,
  });
};
export const AdminDeleteBlog: BlogDeleteApiFunction = (data) => {
  return axios.delete(AdminDeleteBlogUrl, {
    data,
    withCredentials: true,
  });
};
//* ======== BLOG |USER| ==========
const UserAddLikeTOblogUrl = `${BlogURL}/add-like`;
const userDeleteLikeToBlogUrl = `${BlogURL}/delete-like`;
const userAddSubUrl = `${BlogURL}/add-sub`;
export const UserAddLikeTOblog: BlogAddLikeApiFunction = (data) => {
  return axios.post(UserAddLikeTOblogUrl, data, {
    withCredentials: true,
  });
};
export const UserDeleteLikeBlog: BlogDeleteLikeApiFunction = (data) => {
  return axios.delete(userDeleteLikeToBlogUrl, {
    data,
    withCredentials: true,
  });
};
export const UserAddSubToBlog: UserSubBlogApiFunction = (data) => {
  return axios.post(userAddSubUrl, data, {
    withCredentials: true,
  });
};
// * =============== SSR ( Server Side Rendering ) =================== * //

//* ======== BLOG =========
const BlogSRR_URL = `${URL_SSR}/blog`;

export const getAllBlogByUsername: GetAllBlogByUsername = (data) => {
  return axios.get(`${BlogSRR_URL}/${data.username}`);
};
export const getBlogByUsernameWithSlug: GetBlog = (data) => {
  return axios.get(`${BlogSRR_URL}/${data.username}/${data.blog_slug}`);
};
