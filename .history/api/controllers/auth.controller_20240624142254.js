import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: 'user created successufully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
export const login = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: 'invaild credentials' });
    const isPasswordVAild = await bcrypt.compare(password, user.password);
    if (!isPasswordVAild)
      return res.status(401).json({ message: 'invaild credntials' });
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    res
      .cookie('token', token, {
        httpOnly: true,
        // secure:true
      })
      .status(200)
      .json({ message: 'login successfuly' });
    // res.setHeader("Set-Cookie","tets"+"myValue")
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to logi ' });
  }
};
export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: 'logout successfuly' });
};
