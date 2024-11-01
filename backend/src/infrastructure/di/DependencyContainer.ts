import { CreateBillingCycle } from "../../application/use-cases/create-billing-cycle";
import { DeleteBillingCycle } from "../../application/use-cases/delete-billing-cycle";
import { GetAllBillingCycles } from "../../application/use-cases/get-all-billing-cycles";
import { GetBillingCycleById } from "../../application/use-cases/get-billing-cycle-by-id";
import { UpdateBillingCycle } from "../../application/use-cases/update-billing-cycle";
import { BillingCycleController } from "../../interface/controllers/billing-cycle-controller";
import { MongoBillingCycleRepository } from "../persistence/mongodb/repositories/mongo-billing-cycle-repository";

export class DependencyContainer {
    private static instance: DependencyContainer;

    // Repositories
    private billingCycleRepository: MongoBillingCycleRepository;

    // Use cases
    private getAllBillingCyclesUseCase: GetAllBillingCycles;
    private getBillingCycleByIdUseCase: GetBillingCycleById;
    private createBillingCycleUseCase: CreateBillingCycle;
    private updateBillingCycleUseCase: UpdateBillingCycle;
    private deleteBillingCycleUseCase: DeleteBillingCycle;

    private constructor() {
        this.billingCycleRepository = new MongoBillingCycleRepository();
        this.getAllBillingCyclesUseCase = new GetAllBillingCycles(this.billingCycleRepository);
        this.getBillingCycleByIdUseCase = new GetBillingCycleById(this.billingCycleRepository);
        this.createBillingCycleUseCase = new CreateBillingCycle(this.billingCycleRepository);
        this.updateBillingCycleUseCase = new UpdateBillingCycle(this.billingCycleRepository);
        this.deleteBillingCycleUseCase = new DeleteBillingCycle(this.billingCycleRepository);
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
            this.getBillingCycleByIdUseCase,
            this.createBillingCycleUseCase,
            this.updateBillingCycleUseCase,
            this.deleteBillingCycleUseCase,
        );
    }
}