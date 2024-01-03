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

@Entity()
export class comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  comment: string;

  @ManyToOne(() => Users, (usr) => usr.comments)
  @JoinColumn()
  user: Users;

  @ManyToMany(() => comments)
  @JoinTable()
  comments: comments[];
}
