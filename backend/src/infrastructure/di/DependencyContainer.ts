import { CreateBillingCycle } from "../../application/use-cases/create-billing-cycle";
import { GetAllBillingCycles } from "../../application/use-cases/get-all-billing-cycles";
import { BillingCycleController } from "../../interface/controllers/billing-cycle-controller";
import { MongoBillingCycleRepository } from "../persistence/mongodb/repositories/mongo-billing-cycle-repository";

export class DependencyContainer {
    private static instance: DependencyContainer;

    // Repositories
    private billingCycleRepository: MongoBillingCycleRepository;

    // Use cases
    private getAllBillingCyclesUseCase: GetAllBillingCycles;
    private createBillingCycleUseCase: CreateBillingCycle;

    private constructor() {
        this.billingCycleRepository = new MongoBillingCycleRepository();
        this.getAllBillingCyclesUseCase = new GetAllBillingCycles(this.billingCycleRepository);
        this.createBillingCycleUseCase = new CreateBillingCycle(this.billingCycleRepository);
    }

    // Method to access the singleton
    public static getInstance(): DependencyContainer {
        if (!DependencyContainer.instance) {
            DependencyContainer.instance = new DependencyContainer();
        }

        return DependencyContainer.instance;
    }

    // Factory functions for controllers
    public getBillingCycleController(): BillingCycleController {
        return new BillingCycleController(
            this.getAllBillingCyclesUseCase,
            this.createBillingCycleUseCase
        );
    }
}