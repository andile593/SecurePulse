import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/jwt';
import { sendEmail } from '../utils/mailer';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
  const { email, password, role, name, companyId } = req.body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { 
      email, 
      name,
      role,
      companyId,
      password: hashedPassword
    },
  });

  const token = generateToken(user.id);
  res.json({ 
    token, 
    user: { 
      id: user.id, 
      email: user.email, 
      name: user.name, 
      role: user.role  
    } 
  });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken(user.id);
  res.json({ 
    token, 
    user: { 
      id: user.id, 
      email: user.email, 
      name: user.name,
      role: user.role
    } 
  });
};
export const logout = async (req: Request, res: Response) => {
  // For JWT, this is often handled client-side by clearing the token
  res.status(200).json({ message: 'Logged out successfully' });
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetExpires = new Date(Date.now() + 1000 * 60 * 15); // 15 min

  await prisma.user.update({
    where: { email },
    data: {
      resetToken,
      resetTokenExpiry: resetExpires,
    },
  });


  console.log(`Password reset link: https://yourapp.com/reset-password?token=${resetToken}`);
await sendResetPasswordEmail(user.email, resetToken); 
  res.json({ message: 'Password reset email sent' });
};

export async function sendResetPasswordEmail(to: string, token: string) {
  const resetUrl = `https://yourapp.com/reset-password?token=${token}`;

  const html = `
    <h3>Password Reset Request</h3>
    <p>You requested a password reset. Click the link below to reset your password:</p>
    <a href="${resetUrl}">${resetUrl}</a>
    <p>If you did not request this, you can safely ignore this email.</p>
  `;

  await sendEmail({
    to,
    subject: 'Reset Your Password – AI Security Platform',
    html,
  });
}

export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpiry: {
        gt: new Date(),
      },
    },
  });

  if (!user) return res.status(400).json({ message: 'Token invalid or expired' });

  const hashed = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashed,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });

  res.json({ message: 'Password successfully reset' });
};
