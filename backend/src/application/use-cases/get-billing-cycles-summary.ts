import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";

export class GetBillingCyclesSummary {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute() {
        const summary = await this.billingCycleRepository.summary();
        return summary;
    }
}