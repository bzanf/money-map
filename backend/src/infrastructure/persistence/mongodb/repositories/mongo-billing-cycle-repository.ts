import { BillingCycle } from "../../../../domain/entities/billing-cycle";
import { ValidationError } from "../../../../domain/errors/validation-error";
import { BillingCycleRepository } from "../../../../domain/repositories/billing-cycle-repository";
import { toDocumentBillingCycle, toDomainBillingCycle } from "../../../mappers/billing-cycle-mapper";
import { BillingCycleModel } from "../models/billing-cycle-model";
import { Error as MongooseError } from "mongoose";

export class MongoBillingCycleRepository implements BillingCycleRepository {
    async findAll(skip?: number, limit?: number): Promise<BillingCycle[]> {
        const query = BillingCycleModel.find();

        if (skip)
            query.skip(skip);

        if (limit)
            query.limit(limit);

        const docs = await query;

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

    async count(): Promise<number> {
        const docCount = await BillingCycleModel.countDocuments();
        return docCount;
    }

    async summary(): Promise<{ credit: number, debit: number }> {
        const result = await BillingCycleModel.aggregate([
            {
                $project: { credit: { $sum: "$credits.value" }, debit: { $sum: "$debts.value" } }
            },
            {
                $group: { _id: null, credit: { $sum: "$credit" }, debit: { $sum: "$debit" } }
            },
            {
                $project: { _id: false, credit: true, debit: true }
            }
        ]);

        return result[0] ?? { credit: 0, debit: 0 };
    }

}