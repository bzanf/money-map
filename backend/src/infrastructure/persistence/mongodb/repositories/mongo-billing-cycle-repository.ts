import { BillingCycle } from "../../../../domain/entities/billing-cycle";
import { BillingCycleRepository } from "../../../../domain/repositories/billing-cycle-repository";
import { toDocumentBillingCycle, toDomainBillingCycle } from "../../../mappers/billing-cycle-mapper";
import { BillingCycleModel } from "../models/billing-cycle-model";

export class MongoBillingCycleRepository implements BillingCycleRepository {

    async findAll(): Promise<BillingCycle[]> {
        const docs = await BillingCycleModel.find();

        return docs.length > 0
            ? docs.map(toDomainBillingCycle)
            : [];
    }

    async findById(id: string): Promise<BillingCycle | null> {
        const doc = await BillingCycleModel.findById(id);
        return doc ? toDomainBillingCycle(doc) : null;
    }

    async create(billingCycle: BillingCycle): Promise<BillingCycle> {
        const billingCycleDocument = toDocumentBillingCycle(billingCycle);
        const doc = await BillingCycleModel.create(billingCycleDocument);
        return toDomainBillingCycle(doc);
    }

    async update(billingCycle: BillingCycle): Promise<BillingCycle> {
        const billingCycleDocument = toDocumentBillingCycle(billingCycle);
        const updatedDoc = await BillingCycleModel.findByIdAndUpdate(
            billingCycle.id,
            billingCycleDocument,
            { new: true, runValidators: true }
        );

        if (!updatedDoc) {
            throw new Error(`BillingCycle with id ${billingCycle.id} not found`);
        }

        return toDomainBillingCycle(updatedDoc);
    }

    async delete(id: string): Promise<void> {
        const deletedDoc = await BillingCycleModel.findByIdAndDelete(id);
        if (!deletedDoc) {
            throw new Error(`BillingCycle with id ${id} not found`);
        }
    }

}