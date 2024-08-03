import express from 'express';
import { login, logout, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/login', getUser);
router.post('/logout', updateUser);

export default router;
