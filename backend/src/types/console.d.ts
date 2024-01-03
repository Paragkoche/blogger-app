export type logFunction = (
  level: "info" | "error" | "warring",
  message: any,
  ...op: any[]
) => void;
