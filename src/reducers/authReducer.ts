import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthAction =
       { uid: string; displayName: string } 



export interface AuthState {
    checking: boolean;
    uid?: string;
    name?: string;
}

const initialState: AuthState  = {
    checking: true
    // uid: null,
    // name: ''
}


export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<AuthAction>) => {
        state.uid = action.payload.uid
        state.name = action.payload.displayName
        state.checking = false
    },
    logout: (state) => {
        state = initialState
        // state.uid = initialState.uid
        // state.name = initialState.name
        // state.checking = false
    },
    checkingFinish: (state) => {
        
        state.checking = false

      }
    },
  })
  
  // Action creators are generated for each case reducer function
   export const { login, checkingFinish } = authReducer.actions
  
   export default authReducer.reducer



