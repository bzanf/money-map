import { Debit } from '../../domain/entities/debit';
import { DebitDTO } from '../dtos/input/debit-dto';

export function toDomainDebit(dto: DebitDTO): Debit {
    return new Debit(
        dto.name,
        dto.value,
        dto.status
    );
}

// export function toDocumentDebit(debit: Debit): IDebit {
//     return {
//         name: debit.name,
//         value: debit.value,
//         status: debit.status
//     } as IDebit;
// }