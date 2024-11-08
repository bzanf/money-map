import { createSlice } from '@reduxjs/toolkit';
import { fetchSummary } from './dashboardThunks';

interface DashboardState {
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: string;
    summary: {
        credit: number;
        debit: number;
    }
}

const initialState: DashboardState = {
    status: 'idle',
    summary: {
        credit: 550,
        debit: 300
    }
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        summary(state, action) {

        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSummary.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchSummary.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.summary = {...action.payload };
            })
            .addCase(fetchSummary.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown Error'
            })
    }
})

export const { summary } = dashboardSlice.actions;
export default dashboardSlice.reducer;