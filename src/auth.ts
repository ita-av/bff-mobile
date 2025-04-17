import { Request, Response, NextFunction } from "express";

export const extractToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    req.token = authHeader.substring(7);
  }

  next();
};

// extend express request 
declare global {
  namespace Express {
    interface Request {
      token?: string;
    }
  }
}
