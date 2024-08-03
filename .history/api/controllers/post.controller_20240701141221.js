import e from 'express';
import prisma from '../lib/prisma.js';

export const getPost = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get posts' });
  }
};
