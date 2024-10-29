import { BillingCycle } from '../../domain/entities/billing-cycle';
import { CreateBillingCycleDTO } from '../dtos/input/create-billing-cycle-dto';
import { toDomainCredit } from './credit-mapper';
import { toDomainDebit } from './debit-mapper';

export function toDomainBillingCycle(dto: CreateBillingCycleDTO) {
    const credits = dto.credits.length > 0
        ? dto.credits.map(toDomainCredit)
        : [];

    const debts = dto.debts.length > 0
        ? dto.debts.map(toDomainDebit)
        : [];

    return new BillingCycle(
        dto.name,
        dto.month,
        dto.year,
        credits,
        debts
    );
}

// export function toDocumentBillingCycle(billingCycle: BillingCycle): IBillingCycle {
//     const credits = billingCycle.credits.length > 0
//         ? billingCycle.credits.map(toDocumentCredit)
//         : [];

//     const debts = billingCycle.debts.length > 0
//         ? billingCycle.debts.map(toDocumentDebit)
//         : [];

//     return {
//         name: billingCycle.name,
//         month: billingCycle.month,
//         year: billingCycle.year,
//         credits: credits,
//         debts: debts
//     } as IBillingCycle;
// }