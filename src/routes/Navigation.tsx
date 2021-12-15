
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Quotes } from '../components/quotes/Quotes';
import { Navbar } from './Navbar';

import { useAppDispatch } from '../hooks/reduxHooks';
import '../styles/index.css';
import { useEffect } from 'react';
import { startChecking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoutes';
import { Favorites } from '../components/quotes/Favorites';
import { MyQuotes } from '../components/quotes/MyQuotes';
import { Login } from '../components/auth/Login';

export const Navigation = () => {

    const dispatch = useAppDispatch();

    // const { checking, uid } = useAppSelector( state => state.auth);
    // console.log(checking, !!uid, 'uid='+!!uid)

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])
    
    
    return (
        <Router>
            <Navbar />
             <Routes>
                <Route path="/" element={ <Quotes /> }/> 
                <Route path="/favorites"  element={
                    <PrivateRoute>
                        <Favorites />
                    </PrivateRoute>
                } />
                
                <Route path="/myQuotes"  element={ 
                    <PrivateRoute>
                        <MyQuotes />
                    </PrivateRoute>
                 } />
                <Route path="/search" element={ <h1>Buscar por:</h1> } /> 
                <Route path="/login" element={ <Login /> } /> 

             </Routes>
        </Router>


    )
}


