import { DebitStatus } from "../../../domain/enums/debit-status";

export interface DebitDTO {
    name: string;
    value: number;
    status: DebitStatus;
}