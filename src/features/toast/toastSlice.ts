import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ToastState {
  trigger: string | boolean;
  msg: string | boolean;
  status: string | boolean;
}

const initialState: ToastState = {
  trigger: false,
  msg: '',
  status: 'success'
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    executar: (state, action: PayloadAction<Partial<ToastState>>) => {
      const payloadKeys = Object.keys(action.payload) as Array<keyof ToastState>; // Afirmamos que as chaves são do tipo correto
      payloadKeys.forEach((key) => {
        state[key] = action.payload[key]!;
      });
    }
  }
})

export const { executar } = toastSlice.actions

export default toastSlice.reducer
