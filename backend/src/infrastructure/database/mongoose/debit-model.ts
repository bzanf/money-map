import mongoose, { Schema, Document } from "mongoose";

interface IDebit extends Document {
    name: string;
    value: string;
    status: DebitStatus;
}

const DebitSchema: Schema = new Schema({
    name: { type: String, required: true },
    value: { type: String, min: 0, required: true },
    status: { type: String, required: false, uppercase: true, enum: DebitStatus }
});

const DebitModel = mongoose.model<IDebit>("Debit", DebitSchema);
export { IDebit, DebitSchema, DebitModel };