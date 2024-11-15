import { CreditDTO } from "./credit-dto";
import { DebitDTO } from "./debit-dto";

export interface BillingCycleDTO {
    id?: string;
    name: string;
    month: number;
    year: number;
    credits?: CreditDTO[];
    debts?: DebitDTO[];
}