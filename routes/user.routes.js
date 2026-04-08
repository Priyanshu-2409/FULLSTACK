import express from 'express';   //this complete till export default router is a boilerplate code
import { registeredUser } from '../controller/user.controller.js';

const router = express.Router();

router.post("/register", registeredUser);

export default router;