import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const EXPIRES_IN = '1d';

export const generateToken = (userId: number) => {
  return jwt.sign({ 
    id: user.id,
    email: user.email,
    role: user.role
  }, JWT_SECRET, { expiresIn: EXPIRES_IN });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
// dont forget to install --> npm install jsonwebtoken bcryptjs
// npm install --save-dev @types/jsonwebtoken @types/bcryptjs