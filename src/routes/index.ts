import express from 'express';
import controllers from '../controllers';

const router = express.Router();

router.get('/health', controllers.health.checkHealth);

export default router;