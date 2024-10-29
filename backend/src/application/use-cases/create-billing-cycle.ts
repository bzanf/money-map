import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { CreateBillingCycleDTO } from "../dtos/input/create-billing-cycle-dto";
import { toDomainBillingCycle } from "../mappers/billing-cycle-mapper";

export class CreateBillingCycle {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: CreateBillingCycleDTO) {
        const billingCycle = toDomainBillingCycle(input);
        return await this.billingCycleRepository.create(billingCycle);
    }
}