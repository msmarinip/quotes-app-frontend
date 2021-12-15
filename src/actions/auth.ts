import { fetchConToken } from "../helpers/fetch";
import { AppDispatch,  RootState } from '../store/store';

import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { AuthAction, checkingFinish, login } from "../reducers/authReducer";


export const startChecking = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: AppDispatch) => {
        const resp = await fetchConToken( 'auth/' );
        const body = await resp.json();
        
        
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            const user: AuthAction ={
                uid: body.uid,
                displayName: body.name}

            dispatch(login(user));
        } else {
           
           dispatch( checkingFinish() );
        } 


    }
}
