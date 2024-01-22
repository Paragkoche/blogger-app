import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Admin } from "./admin";

@Entity()
export class blogs {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  title: string;
  @Column()
  image: string;
  @Column()
  description: string;

  @Column()
  views:string;


  @ManyToOne(() => Admin, (admin) => admin.blogs)
  @JoinColumn()
  admin: Admin;
}
