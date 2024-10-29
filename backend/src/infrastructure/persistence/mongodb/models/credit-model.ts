import mongoose, { Schema, Document } from "mongoose";

interface ICredit extends Document {
    name: string;
    value: number;
}

const CreditSchema: Schema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
});

const CreditModel = mongoose.model<ICredit>("Credit", CreditSchema);
export { ICredit, CreditSchema, CreditModel };