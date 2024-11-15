import { BillingCycleDTO } from "./billing-cycle-dto";
import { CreditDTO } from "./credit-dto";
import { DebitDTO } from "./debit-dto";

export interface BillingCycleResponseDTO extends BillingCycleDTO {
    credits: CreditDTO[];
    debts: DebitDTO[];
}