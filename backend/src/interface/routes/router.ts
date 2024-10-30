import { Router } from 'express';
import billingCycleRouter from './billing-cycle-routes';

const router = Router();

router.use('/billing-cycles', billingCycleRouter);

export default router;