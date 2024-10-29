import mongoose, { Schema, Document } from "mongoose";
import { CreditSchema, ICredit } from "./credit-model";
import { DebitSchema, IDebit } from "./debit-model";

interface IBillingCycle extends Document {
    name: string;
    month: number;
    year: number;
    credits: ICredit[];
    debts: IDebit[];
}

const BillingCycleSchema: Schema = new Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [CreditSchema],
    debts: [DebitSchema],
});

const BillingCycleModel = mongoose.model<IBillingCycle>("BillingCycle", BillingCycleSchema);
export { IBillingCycle, BillingCycleSchema, BillingCycleModel };