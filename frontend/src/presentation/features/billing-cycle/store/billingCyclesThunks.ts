import { createAsyncThunk } from '@reduxjs/toolkit'
import { DependencyContainer } from '../../../../infrastructure/di/dependency-container';
import { RootState } from '../../../core/store/store';
import { GetAllBillingCyclesDTO } from '../../../../application/dtos/input/get-all-billing-cycles-dto';
import { selectBillingCyclesStatus } from './billingCyclesSlice';

const useCase = DependencyContainer.getInstance().getAllBillingCycles();

export const fetchBillingCycles = createAsyncThunk(
    'billing-cycles/fetchAll',
    async (params?: GetAllBillingCyclesDTO) => {
        const data = await useCase.execute(params);
        return data;
    },
    {
        condition(_arg, thunkApi) {
            const status = selectBillingCyclesStatus(thunkApi.getState() as RootState);
            if (status !== 'idle')
                return false;
        }
    }
)