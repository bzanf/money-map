import { Request, Response } from "express";
import { GetAllBillingCycles } from "../../application/use-cases/get-all-billing-cycles";
import { CreateBillingCycle } from "../../application/use-cases/create-billing-cycle";

export class BillingCycleController {
    constructor(
        private getAllBillingCycles: GetAllBillingCycles,
        private createBillingCycle: CreateBillingCycle,
    ) { }

    async getAll(req: Request, res: Response) {
        const billingCycles = await this.getAllBillingCycles.execute();
        return res.status(200).json(billingCycles);
    }

    async create(req: Request, res: Response) {
        const billingCycle = await this.createBillingCycle.execute(req.body);
        res.status(201).json(billingCycle);
    }


}