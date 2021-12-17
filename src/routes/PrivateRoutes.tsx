
import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../hooks/reduxHooks';

export const PrivateRoute = ({ children }: any) => {

    const { uid } = useAppSelector( state => state.auth);

    
    
    
    // const { pathname, search } = useLocation();
    // (pathname !== '/login')
    //     && localStorage.setItem('lastPath', pathname + search );
    
    return !!uid
        ? children
        : <Navigate to="/login" replace={false} />
}