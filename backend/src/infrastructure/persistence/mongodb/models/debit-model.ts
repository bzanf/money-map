import mongoose, { Schema, Document } from "mongoose";
import { DebitStatus } from "../../../../domain/enums/debit-status";

interface IDebit extends Document {
    name: string;
    value: number;
    status: DebitStatus;
}

const DebitSchema: Schema = new Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: { type: String, required: false, uppercase: true, enum: DebitStatus }
});

const DebitModel = mongoose.model<IDebit>("Debit", DebitSchema);
export { IDebit, DebitSchema, DebitModel };