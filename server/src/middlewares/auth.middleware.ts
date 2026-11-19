import { Request, Response, NextFunction } from "express";

// Example placeholder. Add real JWT/session checks here.
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  next();
}
