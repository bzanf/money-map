import { BillingCycle } from "../entities/billing-cycle";

export interface BillingCycleRepository {
    findAll(): Promise<BillingCycle[]>;
    findById(id: string): Promise<BillingCycle | null>;
    create(billingCycle: BillingCycle): Promise<BillingCycle>;
    update(billingCycle: BillingCycle): Promise<BillingCycle>;
    delete(id: string): Promise<void>;
}