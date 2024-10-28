import { Router } from 'express';
import billingCycleRouter from './billing-cycle-routes';

const router = Router();

router.use('/billing-cycle', billingCycleRouter);

export default router;