import { BillingCycle } from '../../domain/entities/billing-cycle';
import { IBillingCycle } from '../persistence/mongodb/models/billing-cycle-model';
import { toDomainCredit } from './credit-mapper';
import { toDomainDebit } from './debit-mapper';

export function toDomainBillingCycle(doc: IBillingCycle) {
    const credits = doc.credits.length > 0
        ? doc.credits.map(toDomainCredit)
        : [];

    const debts = doc.debts.length > 0
        ? doc.debts.map(toDomainDebit)
        : [];

    return new BillingCycle(
        doc.name,
        doc.month,
        doc.year,
        credits,
        debts,
    );
}