import { NotFoundError } from "../../domain/errors/not-found-error";
import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { DeleteBillingCycleDTO } from "../dtos/input/delete-billing-cycle-dto";
import { BillingCycleResponseDTO } from "../dtos/output/billing-cycle-response-dto";
import { toBillingCycleResponseDTO } from "../mappers/billing-cycle-mapper";

export class DeleteBillingCycle {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: DeleteBillingCycleDTO): Promise<BillingCycleResponseDTO> {
        const billingCycle = await this.billingCycleRepository.delete(input.id);

        if (!billingCycle) {
            throw new NotFoundError(`Billing cycle with id ${input.id} not found`);
        }

        return toBillingCycleResponseDTO(billingCycle);
    }
}