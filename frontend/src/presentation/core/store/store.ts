import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import dashboardReducer from '../../features/dashboard/store/dashboardSlice';
import billingCyclesReducer from '../../features/billing-cycle/store/billingCyclesSlice';
import billingCycleTabsReducer from '../../features/billing-cycle/store/tabsSlice';

export const store = configureStore({
    reducer: {
        location: locationReducer,
        dashboard: dashboardReducer,
        billingCycles: billingCyclesReducer,
        billingCyclesTabs: billingCycleTabsReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;