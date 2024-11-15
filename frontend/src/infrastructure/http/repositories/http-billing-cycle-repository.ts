import axios from "axios";
import { BillingCycle } from "../../../domain/entities/billing-cycle";
import { BillingCycleRepository } from "../../../domain/repositories/billing-cycle-repository";
import { API_URL } from "../../config/api-config";
import { BillingCycleResponseDTO } from "../dtos/billing-cycle-response-dto";
import { toDomainBillingCycle } from "../mappers/billing-cycle-mapper";
import { SummaryDTO } from "../../../domain/dtos/summary-dto";

export class HttpBillingCycleRepository implements BillingCycleRepository {

    async findAll(params?: { skip?: number, limit?: number }): Promise<BillingCycle[]> {
        const response = await axios.get<BillingCycleResponseDTO[]>(`${API_URL}/billing-cycles`);

        return response.data
            ? response.data.map(toDomainBillingCycle)
            : [];
    }

    findById(id: string): Promise<BillingCycle | null> {
        throw new Error("Method not implemented.");
    }
    create(billingCycle: BillingCycle): Promise<BillingCycle> {
        throw new Error("Method not implemented.");
    }
    update(billingCycle: BillingCycle): Promise<BillingCycle | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<BillingCycle | null> {
        throw new Error("Method not implemented.");
    }
    count(): Promise<number> {
        throw new Error("Method not implemented.");
    }

    async summary(): Promise<SummaryDTO> {
        const response = await axios.get<SummaryDTO>(`${API_URL}/billing-cycles/summary`);
        return response.data;
    }
}