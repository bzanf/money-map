import { createAsyncThunk } from '@reduxjs/toolkit'
import { DependencyContainer } from '../../../../infrastructure/di/dependency-container';

const useCase = DependencyContainer.getInstance().getBillingCyclesSummary();

export const fetchSummary = createAsyncThunk(
    'dashboard/summary',
    async () => {
        const data = await useCase.execute();
        return data
    }
)