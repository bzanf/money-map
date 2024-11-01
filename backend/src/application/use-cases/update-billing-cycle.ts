import { NotFoundError } from "../../domain/errors/not-found-error";
import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { UpdateBillingCycleDTO } from "../dtos/input/update-billing-cycle-dto";
import { BillingCycleResponseDTO } from "../dtos/output/billing-cycle-response-dto";
import { toBillingCycleResponseDTO, toDomainBillingCycle } from "../mappers/billing-cycle-mapper";

export class UpdateBillingCycle {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: UpdateBillingCycleDTO): Promise<BillingCycleResponseDTO> {
        const billingCycle = toDomainBillingCycle(input);
        const updatedBillingCycle = await this.billingCycleRepository.update(billingCycle);

        if (!updatedBillingCycle) {
            throw new NotFoundError(`Billing cycle with id ${input.id} not found`);
        }

        return toBillingCycleResponseDTO(updatedBillingCycle);
    }
}