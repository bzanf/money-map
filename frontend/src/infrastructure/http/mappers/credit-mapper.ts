import { Credit } from '../../../domain/entities/credit';
import { CreditDTO } from '../dtos/credit-dto';

export function toDomainCredit(dto: CreditDTO) {
    return new Credit(
        dto.name,
        dto.value
    );
}

export function toDTOCredit(credit: Credit): CreditDTO {
    return {
        name: credit.name,
        value: credit.value
    } as CreditDTO;
}