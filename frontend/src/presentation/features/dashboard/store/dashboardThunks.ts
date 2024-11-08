import { createAsyncThunk } from '@reduxjs/toolkit'
import { DependencyContainer } from '../../../../infrastructure/di/dependency-container';
import { selectSummaryStatus } from './dashboardSlice';
import { RootState } from '../../../core/store/store';

const useCase = DependencyContainer.getInstance().getBillingCyclesSummary();

export const fetchSummary = createAsyncThunk(
    'dashboard/summary',
    async () => {
        const data = await useCase.execute();
        return data;
    },
    {
        condition(arg, thunkApi) {
            const summaryStatus = selectSummaryStatus(thunkApi.getState() as RootState);
            if (summaryStatus !== 'idle')
                return false;
        }
    }
)