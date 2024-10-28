class BillingCycle {
    private _name: String;
    private _month: number;
    private _year: number;
    private _credits: Credit[];
    private _debts: Debit[];

    constructor(name: string, month: number, year: number, credits: Credit[], debts: Debit[]) {
        this._name = name;
        this._month = month;
        this._year = year;
        this._credits = credits;
        this._debts = debts;
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