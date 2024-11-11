import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store/store';

type TabName = 'list' | 'insert' | 'update' | 'delete';

interface TabsState {
    tabs: TabName[];
}

const initialState: TabsState = {
    tabs: ['list', 'insert']
}

const billingCyclesTabsSlice = createSlice({
    name: 'tabs',
    initialState: initialState,
    reducers: {
        showTabs: (_state, action: PayloadAction<TabName[]>) => {
            return { tabs: action.payload };
        },
    },
})

export const { showTabs } = billingCyclesTabsSlice.actions;
export default billingCyclesTabsSlice.reducer;

export const selectTabs = (state: RootState) => state.billingCyclesTabs.tabs;