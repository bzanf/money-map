import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { CreateBillingCycleDTO } from "../dtos/input/create-billing-cycle-dto";
import { BillingCycleResponseDTO } from "../dtos/output/billing-cycle-response-dto";
import { toBillingCycleResponseDTO, toDomainBillingCycle } from "../mappers/billing-cycle-mapper";

export class CreateBillingCycle {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: CreateBillingCycleDTO): Promise<BillingCycleResponseDTO> {
        const billingCycle = toDomainBillingCycle(input);
        const newBillingCycle = await this.billingCycleRepository.create(billingCycle);
        return toBillingCycleResponseDTO(newBillingCycle);
    }
}