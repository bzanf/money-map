import { Debit } from '../../domain/entities/debit';
import { DebitDTO } from '../dtos/input/debit-dto';

export function toDomainDebit(dto: DebitDTO): Debit {
    return new Debit(
        dto.name,
        dto.value,
        dto.status
    );
}