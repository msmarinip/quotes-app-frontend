import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { AppDispatch } from '../store/store';

import { checkingFinish, login, logout } from "../reducers/authReducer";
import Swal from "sweetalert2";


export const startChecking = ()  => {
    return async (dispatch: AppDispatch) => {
        const resp = await fetchConToken( 'auth/' );
        const body = await resp.json();
        
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            const { uid, name } = body.user;
            // console.log(body)
        
            const user ={
                uid: uid,
                displayName: name}

                dispatch(login(user));
        } else {
           
           dispatch( checkingFinish() );
        } 


    }
}

export const startLogin = (email: string, password: string) => {

    return async ( dispatch: AppDispatch ) => { 
  
        const resp = await fetchSinToken( 'auth/login',{ email, password }, 'POST' );
        const body = await resp.json();
        // console.log(body.ok)
        if (body.ok) {
            localStorage.setItem('token', body.token); //  token dura 10 días
            localStorage.setItem('token-init-date', new Date().getTime().toString());
            const { uid, name } = body.user;
            const user ={
                uid: uid,
                displayName: name}
                // console.log({type:'login',payload: user})
                dispatch(login(user));
                
            } else {
                
                console.log(body.msg)
                Swal.fire('Error', body.msg, 'error')
            }
            
        }
    }
    export const startLogout = () => {
        
        return async ( dispatch: AppDispatch ) => { 
            dispatch(logout());
            localStorage.removeItem('token');
            localStorage.removeItem('token-init-date')
        
    }
}

