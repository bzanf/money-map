import { Router } from 'express';
import { DependencyContainer } from '../../infrastructure/di/DependencyContainer';

const router = Router();
const billingCycleController = DependencyContainer.getInstance().getBillingCycleController();

router.get('', (req, res) => billingCycleController.getAll(req, res));
router.get('/count', (req, res) => billingCycleController.count(req, res));
router.get('/summary', (req, res) => billingCycleController.summary(req, res));
router.get('/:id', (req, res) => billingCycleController.getById(req, res));
router.post('', (req, res) => billingCycleController.create(req, res));
router.put('/:id', (req, res) => billingCycleController.update(req, res));
router.delete('/:id', (req, res) => billingCycleController.delete(req, res));

export default router;