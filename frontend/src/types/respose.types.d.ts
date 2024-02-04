import {
  AdminSchemaType,
  BlogSchemaType,
  UserSchemeType,
} from "./schema.types";

export interface AdminHomeDataResponseType {
  200: {
    message: string;
    data: {
      blogs: BlogSchemaType[];
      subs: UserSchemeType[];
    };
  };
  500: {
    message: string;
  };
}
export interface AdminSignInResponseType {
  402: { message: string; label: string }[];
  401: { message: string };
  200: { message: string; data: AdminSchemaType };
  500: { message: string };
}

export interface AdminLoginResponseType {
  402: { message: string; label: string }[];
  401: { message: string };
  200: { message: string; data: AdminSchemaType };
  500: { message: string };
}
export interface AdminUpdateResponseType {
  401: {
    message: string;
  };
  402: {
    message: string;
    label: string;
  }[];
  200: {
    message: string;
  };
  500: {
    message: string;
  };
}

export interface AdminDeleteResponseType {
  401: {
    message: string;
  };
  200: {
    message: string;
  };
  500: {
    message: string;
  };
}
