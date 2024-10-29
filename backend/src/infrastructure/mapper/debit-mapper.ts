import { Debit } from '../../domain/entities/debit';
import { IDebit } from '../persistence/mongodb/models/debit-model';

export function toDomainDebit(doc: IDebit) {
    return new Debit(
        doc.name,
        doc.value,
        doc.status
    );
}