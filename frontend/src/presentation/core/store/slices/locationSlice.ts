import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LocationState {
    path: string;
    currentPage: string;
}

const initialState: LocationState = {
    path: '/',
    currentPage: 'Home'
};

const locationSlice = createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        updateLocation: (_state, action: PayloadAction<string>) => {
            const pathNames = action.payload.split('/').filter(x => x);
            const currentPage = pathNames.length > 0
                ? pathNames[0].charAt(0).toUpperCase() + pathNames[0].slice(1)
                : 'Home';

            return { path: action.payload, currentPage };
        },
    },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;

// selectors
export const selectLocation = (state: RootState) => state.location;