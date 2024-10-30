import { BillingCycleDTO } from "../common/billing-cycle-dto";
import { CreditDTO } from "../common/credit-dto";
import { DebitDTO } from "../common/debit-dto";

export interface BillingCycleResponseDTO extends BillingCycleDTO {
    credits: CreditDTO[];
    debts: DebitDTO[];
}