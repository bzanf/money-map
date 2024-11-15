import { Debit } from "../../../domain/entities/debit";
import { DebitDTO } from "../dtos/debit-dto";


export function toDomainDebit(dto: DebitDTO): Debit {
    return new Debit(
        dto.name,
        dto.value,
        dto.status
    );
}

export function toDTODebit(debit: Debit): DebitDTO {
    return {
        name: debit.name,
        value: debit.value,
        status: debit.status
    } as DebitDTO;
}