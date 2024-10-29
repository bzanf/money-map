export class Transaction {
    private _name: string;
    private _value: number;

    constructor(name: string, value: number) {
        this._name = name;
        this._value = value;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this._value;
    }
}