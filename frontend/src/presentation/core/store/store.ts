import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dashboardReducer from '../../features/dashboard/store/dashboardSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        location: locationReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;