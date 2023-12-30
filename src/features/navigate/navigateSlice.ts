import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigateState {
  codigoHttp: string | undefined; // Permitindo ser undefined
}

const initialState: NavigateState = {
  codigoHttp: undefined, // Inicializado como undefined
};

export const navigateSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    executarNavigate: (state, action: PayloadAction<Partial<NavigateState>>) => {
      Object.keys(action.payload).forEach((key) => {
        // Verifica se a chave existe no payload antes de atribuir ao estado
        if (key in state) {
          state[key as keyof NavigateState] = action.payload[key as keyof NavigateState];
        }
      });
    },
  },
});

export const { executarNavigate } = navigateSlice.actions;

export default navigateSlice.reducer;
