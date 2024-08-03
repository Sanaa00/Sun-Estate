import express from 'express';

export const getUsers = async (req, res) => {
  console.log('its work!');
  try {
    const user = await prisma.user.findMany();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};

export const getUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'failed to get the users' });
  }
};

export const updateUser = async (req, res) => {
  try {
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
