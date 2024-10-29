import { Credit } from '../../domain/entities/credit';
import { CreditDTO } from '../dtos/input/credit-dto';

export function toDomainCredit(dto: CreditDTO) {
    return new Credit(
        dto.name,
        dto.value
    );
}

// export function toDocumentCredit(credit: Credit): ICredit {
//     return {
//         name: credit.name,
//         value: credit.value,
//     } as ICredit;
// }