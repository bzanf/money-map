import { BillingCycle } from '../../../domain/entities/billing-cycle';
import { BillingCycleResponseDTO } from '../dtos/billing-cycle-response-dto';
import { toDomainCredit } from './credit-mapper';
import { toDomainDebit } from './debit-mapper';

export function toDomainBillingCycle(dto: BillingCycleResponseDTO): BillingCycle {
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