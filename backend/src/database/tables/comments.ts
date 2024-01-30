import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./users";
import { blogs } from "./blogs";

@Entity()
export class comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment: string;

  @ManyToOne(() => Users, (usr) => usr.comments)
  @JoinColumn()
  user: Users;
  @ManyToMany(() => Users)
  @JoinTable()
  likes: Users[];
  @ManyToMany(() => comments)
  @JoinTable()
  comments: comments[];
  @ManyToMany(() => blogs, (usr) => usr.comments)
  @JoinTable()
  blog: blogs[];
}
