class Debit extends Transaction {
    private _status: DebitStatus;

    constructor(name: string, value: number, status: DebitStatus) {
        super(name, value);
        this._status = status;
    }

    get status() {
        return this._status;
    }
}