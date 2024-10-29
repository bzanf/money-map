import { CreditDTO } from "./credit-dto";
import { DebitDTO } from "./debit-dto";

export interface CreateBillingCycleDTO {
    name: string;
    month: number;
    year: number;
    credits: CreditDTO[];
    debts: DebitDTO[];
}