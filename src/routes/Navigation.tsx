import { Link, NavLink, Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const Navigation = () => {
    return (
        <Router>
            <nav>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                <NavLink to="/favorites" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Mis Favoritos</NavLink>
                <NavLink to="/myQuotes" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Mi selección</NavLink>
                <NavLink to="/search" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Buscar por</NavLink>
            </nav>
                <Outlet />

            <Routes>
                <Route path="/" element={ <h1>Home</h1> }/>
                    <Route path="/favorites" element={ <h1>Mis favoritos</h1> } />
                    <Route path="/myQuotes" element={ <h1>Mis frases</h1> } />
                    <Route path="/search" element={ <h1>Buscar por:</h1> } />

                
            </Routes>

        </Router>

    )
}


