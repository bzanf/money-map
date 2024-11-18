import { DebitStatus } from "../enums/debit-status";
import { Transaction } from "./transaction";

export interface Debit extends Transaction {
    status: DebitStatus;
}