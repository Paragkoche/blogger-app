import {
  BeforeInsert,
  Column,
  Entity,
  // JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { comments } from "./comments";
import { Admin } from "./admin";
import { log } from "@/helpers/console";
import { SHA512, enc } from "crypto-js";
import { genSalt, hash } from "bcrypt";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  emailId: string;
  @Column()
  password: string;

  @ManyToOne(() => Admin, (admin) => admin.subs)
  // @JoinColumn()
  subs: Admin;
  @OneToMany(() => comments, (cmt) => cmt.user)
  // @JoinColumn()
  comments: comments[];

  @BeforeInsert()
  async password_hashing(password: string) {
    let planPassword = this.password || password;
    log("info", "[password] fist hashing");
    let h512password = SHA512(planPassword).toString(enc.Hex);
    log("info", "[password] done fist hashing");
    log("info", "[password] sec hashing");
    let salt = await genSalt(14);
    let hashPassword = await hash(h512password, salt);
    log("info", "[password] done sec hashing ");
    this.password = hashPassword;
    log("info", "[password] password stored ");
  }
}
