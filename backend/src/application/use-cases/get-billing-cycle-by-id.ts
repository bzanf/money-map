import { NotFoundError } from "../../domain/errors/not-found-error";
import { BillingCycleRepository } from "../../domain/repositories/billing-cycle-repository";
import { GetBillingCycleByIdDTO } from "../dtos/input/get-billing-cycle-by-id-dto";
import { BillingCycleResponseDTO } from "../dtos/output/billing-cycle-response-dto";
import { toBillingCycleResponseDTO } from "../mappers/billing-cycle-mapper";

export class GetBillingCycleById {
    constructor(private billingCycleRepository: BillingCycleRepository) { }

    async execute(input: GetBillingCycleByIdDTO): Promise<BillingCycleResponseDTO> {
        const billingCycle = await this.billingCycleRepository.findById(input.id);

        if (!billingCycle) {
            throw new NotFoundError(`Billing cycle with id ${input.id} not found`);
        }

        return toBillingCycleResponseDTO(billingCycle);
    }
}