import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { blogs } from "./blogs";
import { Users } from "./users";
import { SHA512, enc } from "crypto-js";
import { hash, genSalt } from "bcrypt";
import { log } from "@/helpers/console";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true })
  emailId: string;
  @Column()
  password: string;
  @Column({ unique: true })
  username: string;

  @Column()
  bio: string;

  @CreateDateColumn()
  joinedAt: Date;

  @OneToMany(() => blogs, (blog) => blog.admin)
  @JoinColumn()
  blogs: blogs[];
  @OneToMany(() => Users, (usr) => usr)
  @JoinColumn()
  subs: Users[];

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
