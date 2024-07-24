import { Redis } from "ioredis";
import { config } from "./config";

const redisClient = () => {
  if (!config.REDIS_URL) {
    console.log("Redis connected successfully");
    return config.REDIS_URL as string;
  }
  throw new Error("Redis connection failed");
};
export const redis = new Redis(redisClient());
