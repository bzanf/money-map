import { Debit } from '../../domain/entities/debit';
import { IDebit } from '../persistence/mongodb/models/debit-model';

export function toDomainDebit(doc: IDebit): Debit {
    return new Debit(
        doc.name,
        doc.value,
        doc.status
    );
}

export function toDocumentDebit(debit: Debit): IDebit {
    return {
        name: debit.name,
        value: debit.value,
        status: debit.status
    } as IDebit;
}