import { DataSource } from "typeorm";
import { comments, blogs, Users, Admin } from "./tables";
export default new DataSource({
  type: "sqlite",
  database: "db.sql",
  synchronize: true,
  entities: [comments, blogs, Users, Admin],
});
