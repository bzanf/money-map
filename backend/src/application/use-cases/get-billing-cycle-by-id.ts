import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { GetBillingCycleByIdDTO } from "../dtos/input/get-billing-cycle-by-id-dto";

export class GetBillingCycleById {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: GetBillingCycleByIdDTO) {
        return await this.billingCycleRepository.findById(input.id);
    }
}