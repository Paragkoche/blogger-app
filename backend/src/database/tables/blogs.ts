import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Admin } from "./admin";
import { Users } from "./users";
import { comments } from "./comments";

@Entity()
export class blogs {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  slug: string;

  @Column()
  title: string;
  @Column()
  image: string;
  @Column()
  description: string;

  @Column({ default: "0" })
  views: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToMany(() => Users, (usr) => usr.blogLike)
  @JoinTable()
  likeBy: Users[];
  @ManyToMany(() => comments, (usr) => usr.blog)
  @JoinTable()
  comments: comments[];
  @ManyToOne(() => Admin, (admin) => admin.blogs)
  @JoinColumn()
  admin: Admin;
}
