import chalk from "ansi-colors";
import { logFunction } from "@/types/console";

export const log: logFunction = (level, message, ...op) => {
  switch (level.toLocaleLowerCase()) {
    case "info":
      return console.log(
        chalk.green("💁 [INFO]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.blue(message),
        ...op
      );
    case "error":
      return console.log(
        chalk.red("🛑 [ERROR]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.red(message),
        ...op
      );
    case "warring":
      return console.log(
        chalk.yellow("⚠️ [WARRING]\t"),
        chalk.blueBright("[" + new Date().toLocaleString() + "] "),
        chalk.yellow(message),
        ...op
      );
  }
};
