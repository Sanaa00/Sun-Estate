export const shouldBeLoggedIn = async (req, res) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      message: 'not',
    });
};
