import { Router } from 'express';
import { DependencyContainer } from '../../infrastructure/di/DependencyContainer';

const router = Router();
const billingCycleController = DependencyContainer.getInstance().getBillingCycleController();

router.post("", (req, res) => billingCycleController.create(req, res));

export default router;