import { BillingCycle } from "../entities/billing-cycle";

export interface BillingCycleRepository {
    findAll(skip?: number, limit?: number): Promise<BillingCycle[]>;
    findById(id: string): Promise<BillingCycle | null>;
    create(billingCycle: BillingCycle): Promise<BillingCycle>;
    update(billingCycle: BillingCycle): Promise<BillingCycle | null>;
    delete(id: string): Promise<BillingCycle | null>;
    count(): Promise<number>;
    summary(): Promise<{ credit: number, debit: number }>;
}