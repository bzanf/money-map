import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";

export class GetBillingCyclesCount {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute() {
        const count = await this.billingCycleRepository.count();
        return { value: count };
    }
}