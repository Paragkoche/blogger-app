declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      JWT_KEY?: string;
    }
  }
}
export {};
