import { Credit } from "./credit";
import { Debit } from "./debit";

export class BillingCycle {
    private _id?: string;
    private _name: string;
    private _month: number;
    private _year: number;
    private _credits: Credit[];
    private _debts: Debit[];

    constructor(name: string, month: number, year: number, credits: Credit[], debts: Debit[], id?: string) {
        this._name = name;
        this._month = month;
        this._year = year;
        this._credits = credits;
        this._debts = debts;
        this._id = id;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get month() {
        return this._month;
    }

    get year() {
        return this._year;
    }

    get credits() {
        return this._credits;
    }

    get debts() {
        return this._debts;
    }
}