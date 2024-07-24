import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
import ErrorMiddleware from "./middlewares/error";
export const app = express();
app.use(
  cors({
    origin: config.CLIENT_URL,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    succcess: true,
    message: "API is working",
  });
});

// unknown route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
app.use(ErrorMiddleware);
