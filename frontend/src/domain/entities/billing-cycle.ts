import { Credit } from "./credit";
import { Debit } from "./debit";

export interface BillingCycle {
    id: string;
    name: string;
    month: number;
    year: number;
    credits: Credit[];
    debts: Debit[];
}