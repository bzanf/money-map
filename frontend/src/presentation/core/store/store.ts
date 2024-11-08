import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dashboardReducer from '../../features/dashboard/store/dashboardSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;