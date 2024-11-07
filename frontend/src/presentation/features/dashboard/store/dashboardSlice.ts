import { createSlice } from '@reduxjs/toolkit';

interface DashboardState {
    credit: number;
    debit: number;
}

const initialState: DashboardState = {
    credit: 100,
    debit: 50,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: initialState,
    reducers: {
        summary(state, action) {

        },
    },
})

export const { summary } = dashboardSlice.actions;
export default dashboardSlice.reducer;