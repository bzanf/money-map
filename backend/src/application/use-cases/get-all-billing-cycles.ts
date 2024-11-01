import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { toBillingCycleResponseDTO } from "../mappers/billing-cycle-mapper";

export class GetAllBillingCycles {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute() {
        const billingCycles = await this.billingCycleRepository.findAll();

        return billingCycles
            ? billingCycles.map(toBillingCycleResponseDTO)
            : [];
    }
}