import { BillingCycle } from "../../../../domain/entities/billing-cycle";
import { BillingCycleRepository } from "../../../../domain/repositories/billing-cycle-repository";
import { toDomainBillingCycle } from "../../../mapper/billing-cycle-mapper";
import { BillingCycleModel } from "../models/billing-cycle-model";

export class MongoBillingCycleRepository implements BillingCycleRepository {

    async findAll(): Promise<BillingCycle[]> {
        const docs = await BillingCycleModel.find();
        return docs.length > 0
            ? docs.map(toDomainBillingCycle)
            : [];
    }
    findById(id: string): Promise<BillingCycle | null> {
        throw new Error("Method not implemented.");
    }
    create(billingCycle: BillingCycle): Promise<BillingCycle> {
        throw new Error("Method not implemented.");
    }
    update(billingCycle: BillingCycle): Promise<BillingCycle> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}