import { createSlice } from '@reduxjs/toolkit';
import { fetchBillingCycles } from './billingCyclesThunks';
import { RootState } from '../../../core/store/store';
import { BillingCycle } from '../../../../domain/entities/billing-cycle';

interface BillingCyclesState {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    billingCycles: BillingCycle[]
}

const initialState: BillingCyclesState = {
    status: 'idle',
    error: null,
    billingCycles: []
}

const billingCyclesSlice = createSlice({
    name: 'billingCycles',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBillingCycles.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchBillingCycles.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.billingCycles = { ...action.payload };
            })
            .addCase(fetchBillingCycles.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown Error'
            })
    }
})

export default billingCyclesSlice.reducer;

export const selectBillingCycles = (state: RootState) => state.billingCycles.billingCycles;
export const selectBillingCyclesStatus = (state: RootState) => state.billingCycles.status;
export const selectBillingCyclesError = (state: RootState) => state.billingCycles.error;