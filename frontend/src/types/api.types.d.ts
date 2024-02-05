import { Axios, Axios } from "axios";

export type AdminLoginApiFunction = (data: {
  emailId?: string;
  password: string;
  username?: string;
}) => Promise<Axios>;
export type AdminSingInApiFunction = (data: {
  emailId: string;
  password: string;
  username: string;
  bio?: string;
}) => Promise<Axios>;
export type AdminUpdateApiFunction = (data: { bio?: string }) => Promise<Axios>;
