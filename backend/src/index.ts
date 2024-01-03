import app from "./app";
import { log } from "./helpers/console";
import env from "./env";
import db from "@/database/db";
const PORT = env.PORT;
app.listen(PORT, async () => {
  console.clear();
  log("warring", "Database init ...");
  await db.initialize();
  log("warring", "db load complete");
  log("info", `server start on http://localhost:${PORT}`);
});
