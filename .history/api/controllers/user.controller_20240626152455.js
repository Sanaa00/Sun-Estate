import express from 'express';
import prisma from '../lib/prisma.js';

export const getUsers = async (req, res) => {
  console.log('its work!');
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  if (id !== tokenUserId) {
    return res.status(403).json({ message: 'Not Authorized!' });
  }

  try {
    const updateUser = await prisma.user.update({
      where: { id },
      data: body,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};
