import {
  AdminSchemaType,
  BlogSchemaType,
  UserSchemeType,
} from "./schema.types";

export interface bodyError {
  message: string;
  label: string;
}

export interface InternalServerError {
  500: {
    message: string;
  };
}

export interface AdminLoginRespType extends InternalServerError {
  402: bodyError[];
  401: { message: string };
  200: {
    message: string;
    data: AdminSchemaType;
  };
}

export interface AdminSingIngRespType extends InternalServerError {
  402: bodyError[];
  401: { message: string };
  200: {
    message: string;
    data: AdminSchemaType;
  };
}

export interface AdminUpdateRespType extends InternalServerError {
  402: bodyError[];
  200: { message: string };
}

export interface AdminDeleteRespType extends InternalServerError {
  200: { message: string };
}

export interface UserSingInRespType extends InternalServerError {
  402: bodyError[];
  401: {
    message: string;
  };
  200: {
    message: string;
    data: UserSchemeType;
  };
}
export interface UserLoginRespType extends InternalServerError {
  402: bodyError[];
  401: {
    message: string;
  };
  200: {
    message: string;
    data: UserSchemeType;
  };
}
export interface AdminAddBlogRespType extends InternalServerError {
  402: bodyError[];
  401: { message: string };
  200: {
    message: string;
    data: BlogSchemaType;
  };
}
export interface AdminUpdateBlogRespType extends InternalServerError {
  402: bodyError[];
  404: { message: string };
  200: {
    message: string;
    data: BlogSchemaType;
  };
}

export interface AdminDeleteBlogRespType extends InternalServerError {
  402: bodyError[];
  404: {
    message: string;
  };
  200: {
    message: string;
    data: {
      raw: any;
      affected?: number | null;
    };
  };
}
