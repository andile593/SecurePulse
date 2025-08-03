import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

export function requireAuth(roles: string[] = []) {
  return (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    try {
      const user = jwt.verify(token, JWT_SECRET) as any;
      if (roles.length && !roles.includes(user.role)) {
        return res.sendStatus(403);
      }
      req.user = user; // attach user object to request
      next();
    } catch {
      return res.sendStatus(403);
    }
  };
}