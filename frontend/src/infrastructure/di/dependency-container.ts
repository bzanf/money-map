import { GetAllBillingCycles } from "../../application/use-cases/get-all-billing-cycles";
import { GetBillingCyclesSummary } from "../../application/use-cases/get-billing-cycles-summary";
import { HttpBillingCycleRepository } from "../http/repositories/http-billing-cycle-repository";

export class DependencyContainer {
    private static instance: DependencyContainer;

    // Repositories
    private billingCycleRepository: HttpBillingCycleRepository;

    // Use cases
    private _getBillingCyclesSummary: GetBillingCyclesSummary;
    private _getAllBillingCycles: GetAllBillingCycles;

    private constructor() {
        this.billingCycleRepository = new HttpBillingCycleRepository();
        this._getBillingCyclesSummary = new GetBillingCyclesSummary(this.billingCycleRepository);
        this._getAllBillingCycles = new GetAllBillingCycles(this.billingCycleRepository);
    }

    // Method to access the singleton
    public static getInstance(): DependencyContainer {
        if (!DependencyContainer.instance) {
            DependencyContainer.instance = new DependencyContainer();
        }

        return DependencyContainer.instance;
    }

    // Factory functions for use cases
    public getBillingCyclesSummary() {
        return this._getBillingCyclesSummary;
    }

    public getAllBillingCycles() {
        return this._getAllBillingCycles;
    }
}