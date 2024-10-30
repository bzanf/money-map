import { BillingCycle } from '../../domain/entities/billing-cycle';
import { IBillingCycle } from '../persistence/mongodb/models/billing-cycle-model';
import { toDocumentCredit, toDomainCredit } from './credit-mapper';
import { toDocumentDebit, toDomainDebit } from './debit-mapper';

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
        doc.id
    );
}

export function toDocumentBillingCycle(billingCycle: BillingCycle): IBillingCycle {
    const credits = billingCycle.credits.length > 0
        ? billingCycle.credits.map(toDocumentCredit)
        : [];

    const debts = billingCycle.debts.length > 0
        ? billingCycle.debts.map(toDocumentDebit)
        : [];

    return {
        name: billingCycle.name,
        month: billingCycle.month,
        year: billingCycle.year,
        credits: credits,
        debts: debts,
        id: billingCycle.id
    } as IBillingCycle;
}