import { BillingCycle } from '../../domain/entities/billing-cycle';
import { CreateBillingCycleDTO } from '../dtos/input/create-billing-cycle-dto';
import { BillingCycleResponseDTO } from '../dtos/output/billing-cycle-response-dto';
import { toDomainCredit, toDTOCredit } from './credit-mapper';
import { toDomainDebit, toDTODebit } from './debit-mapper';

export function toDomainBillingCycle(dto: CreateBillingCycleDTO): BillingCycle {
    const credits = (dto.credits?.length ?? 0) > 0
        ? dto.credits!.map(toDomainCredit)
        : [];

    const debts = (dto.debts?.length ?? 0) > 0
        ? dto.debts!.map(toDomainDebit)
        : [];

    return new BillingCycle(
        dto.name,
        dto.month,
        dto.year,
        credits,
        debts,
        dto.id
    );
}

export function toBillingCycleResponseDTO(billingCycle: BillingCycle): BillingCycleResponseDTO {
    const credits = billingCycle.credits.length > 0
        ? billingCycle.credits.map(toDTOCredit)
        : [];

    const debts = billingCycle.debts.length > 0
        ? billingCycle.debts!.map(toDTODebit)
        : [];

    return {
        id: billingCycle.id,
        name: billingCycle.name,
        month: billingCycle.month,
        year: billingCycle.year,
        credits,
        debts,
    } as BillingCycleResponseDTO;
}