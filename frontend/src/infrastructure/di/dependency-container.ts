import { GetBillingCyclesSummary } from "../../application/use-cases/get-billing-cycles-summary";
import { HttpBillingCycleRepository } from "../repositories/http/http-billing-cycle-repository";

export class DependencyContainer {
    private static instance: DependencyContainer;

    // Repositories
    private billingCycleRepository: HttpBillingCycleRepository;

    // Use cases
    private _getBillingCyclesSummary: GetBillingCyclesSummary;

    private constructor() {
        this.billingCycleRepository = new HttpBillingCycleRepository();
        this._getBillingCyclesSummary = new GetBillingCyclesSummary(this.billingCycleRepository);
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
}