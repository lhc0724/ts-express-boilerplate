import express from 'express';
import { healthController } from '../controllers';
import userRouter from './userRoute'

const router = express.Router();

router.get('/health', healthController.checkHealth);
router.use('/users', userRouter);

export default router;