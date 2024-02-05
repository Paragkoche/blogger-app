import { Axios } from "axios";

export type AdminLoginApiFunction = (data: {
  emailId?: string;
  password: string;
  username?: string;
}) => Promise<Axios>;
