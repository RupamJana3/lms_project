import { NextFunction, Request, Response } from "express";

const asyncHandler = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.all(fn(req, res, next)).catch((err) => next(err));
  };
};
export { asyncHandler };
