import { config as Conf } from "dotenv";
Conf();

const _config = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  REDIS_URL: process.env.REDIS_URL,
};
export const config = Object.freeze(_config);
