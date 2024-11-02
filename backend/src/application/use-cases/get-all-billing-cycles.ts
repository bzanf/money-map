import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { GetAllBillingCyclesDTO } from "../dtos/input/get-all-billing-cycles-dto";
import { toBillingCycleResponseDTO } from "../mappers/billing-cycle-mapper";

export class GetAllBillingCycles {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: GetAllBillingCyclesDTO) {
        const billingCycles = await this.billingCycleRepository.findAll(input.skip, input.limit);

        return billingCycles
            ? billingCycles.map(toBillingCycleResponseDTO)
            : [];
    }
}