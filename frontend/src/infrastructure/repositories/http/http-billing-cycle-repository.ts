import axios from "axios";
import { BillingCycle } from "../../../domain/entities/billing-cycle";
import { BillingCycleRepository } from "../../../domain/repositories/billing-cycle-repository";
import { API_URL } from "../../config/api-config";

export class HttpBillingCycleRepository implements BillingCycleRepository {
    findAll(skip?: number, limit?: number): Promise<BillingCycle[]> {
        throw new Error("Method not implemented.");
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
    async summary(): Promise<{ credit: number; debit: number; }> {
        const response = await axios.get<{ credit: number; debit: number; }>(`${API_URL}/billing-cycles/summary`);
        return response.data;
    }
}