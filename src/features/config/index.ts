import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigAppState {
  moduleSelected: string | undefined; 
}

const initialState: ConfigAppState = {
  moduleSelected: undefined, 
};

export const configAppSlice = createSlice({
  name: 'configApp',
  initialState,
  reducers: {
    CONFIG_APP: (state, action: PayloadAction<Partial<ConfigAppState>>) => {
      Object.keys(action.payload).forEach((key) => {
        if (key in state) {
          state[key as keyof ConfigAppState] = action.payload[key as keyof ConfigAppState];
        }
      });
    },
  },
});

export const { CONFIG_APP } = configAppSlice.actions;

export default configAppSlice.reducer;
