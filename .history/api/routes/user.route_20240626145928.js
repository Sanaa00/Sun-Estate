import express from 'express';
// import { login, logout, register } from '../controllers/auth.controller.js';
import verifyToken from '../middleware/verifyToken.js';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', verifyToken, getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
