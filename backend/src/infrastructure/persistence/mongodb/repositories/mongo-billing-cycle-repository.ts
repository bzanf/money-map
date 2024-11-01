import { BillingCycle } from "../../../../domain/entities/billing-cycle";
import { ValidationError } from "../../../../domain/errors/validation-error";
import { BillingCycleRepository } from "../../../../domain/repositories/billing-cycle-repository";
import { toDocumentBillingCycle, toDomainBillingCycle } from "../../../mappers/billing-cycle-mapper";
import { BillingCycleModel } from "../models/billing-cycle-model";
import { Error as MongooseError } from "mongoose";

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
        try {
            const billingCycleDocument = toDocumentBillingCycle(billingCycle);
            const doc = await BillingCycleModel.create(billingCycleDocument);
            return toDomainBillingCycle(doc);
        } catch (error) {
            if (error instanceof MongooseError.ValidationError) {
                throw new ValidationError(`Invalid data for creating BillingCycle: ${error.message}`);
            }

            throw new Error("An unexpected error occurred while creating BillingCycle.");
        }
    }

    async update(billingCycle: BillingCycle): Promise<BillingCycle | null> {
        const billingCycleDocument = toDocumentBillingCycle(billingCycle);

        const updatedDoc = await BillingCycleModel.findByIdAndUpdate(
            billingCycle.id,
            billingCycleDocument,
            { new: true, runValidators: true }
        );

        return updatedDoc ? toDomainBillingCycle(updatedDoc) : null;
    }

    async delete(id: string): Promise<BillingCycle | null> {
        const deletedDoc = await BillingCycleModel.findByIdAndDelete(id);
        return deletedDoc ? toDomainBillingCycle(deletedDoc) : null;
    }

}