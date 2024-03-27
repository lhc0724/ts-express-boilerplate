import express from 'express';
import { UserController } from '../controllers';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);

export default userRouter;