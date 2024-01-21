
import { compare } from "bcrypt";
import { SHA512, enc } from "crypto-js";

export async function  password_verify(password: string,hasPassword:string) {
    let planPassword = password;
    let h512password = SHA512(planPassword).toString(enc.Hex);
    return await compare(h512password,hasPassword);
    
  }