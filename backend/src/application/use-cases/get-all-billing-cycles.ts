import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";

export class GetAllBillingCycles {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute() {
        return await this.billingCycleRepository.findAll();
    }
}