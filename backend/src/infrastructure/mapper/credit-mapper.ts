import { Credit } from '../../domain/entities/credit';
import { ICredit } from '../persistence/mongodb/models/credit-model';

export function toDomainCredit(doc: ICredit) {
    return new Credit(
        doc.name,
        doc.value
    );
}