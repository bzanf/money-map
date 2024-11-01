import { Request, Response } from "express";
import { GetAllBillingCycles } from "../../application/use-cases/get-all-billing-cycles";
import { CreateBillingCycle } from "../../application/use-cases/create-billing-cycle";
import { GetBillingCycleById } from "../../application/use-cases/get-billing-cycle-by-id";
import { UpdateBillingCycle } from "../../application/use-cases/update-billing-cycle";
import { DeleteBillingCycle } from "../../application/use-cases/delete-billing-cycle";

export class BillingCycleController {
    constructor(
        private getAllBillingCycles: GetAllBillingCycles,
        private getBillingCycleById: GetBillingCycleById,
        private createBillingCycle: CreateBillingCycle,
        private updateBillingCycle: UpdateBillingCycle,
        private deleteBillingCycle: DeleteBillingCycle,
    ) { }

    async getAll(req: Request, res: Response) {
        const billingCycles = await this.getAllBillingCycles.execute();
        return res.status(200).json(billingCycles);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const billingCycle = await this.getBillingCycleById.execute({ id });
        return res.status(200).json(billingCycle);
    }

    async create(req: Request, res: Response) {
        const data = req.body;
        const billingCycle = await this.createBillingCycle.execute(data);

        const resourceUrl = `${req.protocol}://${req.get('host')}/api/billing-cycles/${billingCycle.id}`;
        return res.status(201)
            .header('Location', resourceUrl)
            .json(billingCycle);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        const billingCycleData = { id, ...data };

        const billingCycle = await this.updateBillingCycle.execute(billingCycleData);
        return res.status(200).json(billingCycle);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const billingCycle = await this.deleteBillingCycle.execute({ id });
        return res.sendStatus(204);
    }

}