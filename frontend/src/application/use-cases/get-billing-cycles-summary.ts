import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";

export class GetBillingCyclesSummary {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(): Promise<{ credit: number, debit: number }> {
        const summary = await this.billingCycleRepository.summary();
        return summary;
    }
}