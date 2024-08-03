import jwt from 'jsonwebtoken';
export const shouldBeLoggedIn = async (req, res) => {
  res.status(200).json({ message: 'you are Authenticated' });
};

export const shouldBeAdmin = async (req, res) => {};
