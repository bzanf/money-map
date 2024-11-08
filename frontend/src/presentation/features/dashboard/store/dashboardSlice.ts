import { createSlice } from '@reduxjs/toolkit';
import { fetchSummary } from './dashboardThunks';
import { RootState } from '../../../core/store/store';

interface DashboardState {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    summary: {
        credit: number;
        debit: number;
    }
}

const initialState: DashboardState = {
    status: 'idle',
    error: null,
    summary: {
        credit: 0,
        debit: 0
    }
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSummary.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchSummary.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.summary = { ...action.payload };
            })
            .addCase(fetchSummary.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown Error'
            })
    }
})

// export const { summary } = dashboardSlice.actions;
export default dashboardSlice.reducer;

export const selectSummary = (state: RootState) => state.dashboard.summary;
export const selectSummaryStatus = (state: RootState) => state.dashboard.status;
export const selectSummaryError = (state: RootState) => state.dashboard.error;