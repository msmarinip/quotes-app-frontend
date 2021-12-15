import { NavLink } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import { useAppSelector } from '../hooks/reduxHooks';
import { NavbarTop } from './NavbarTop';



export const Navbar = () => {

    const { uid, checking } = useAppSelector( state => state.auth);
  
    if(checking) return <h5>Espere...</h5>

    const activeLink = (isActive: Boolean) => {
        return isActive ? 'nav-link active' : 'nav-link';
    }
    const menuItmes = (path: string = '/', name: string = 'Home') => (
        <li className="nav-item">
            <span  data-bs-dismiss="offcanvas"><NavLink to={ path } end className={ ({isActive} ) =>activeLink(isActive)} >{ name }</NavLink></span>
        </li>
    )
    const weekDay =`${moment().format('dddd')}` 
    const date = `${weekDay[0].toUpperCase()}${weekDay.slice(1)}, ${moment().format('LL')}`;

    return (
        <nav className="navbar navbar-dark  bg-gradient" style={{ backgroundColor:' rgba(19,35,47,0.75)' }}>
            <div className="container-fluid">
                
                <NavbarTop />

                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <span className="offcanvas-title" id="offcanvasNavbarLabel">{ date }</span>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body p-4"  style={{ backgroundColor:' rgba(19,35,47,0.75)' }}>

                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        { menuItmes('/','Home') }
                        { (!!uid) && menuItmes('/favorites','Favoritos') }
                        { (!!uid) && menuItmes('/myQuotes','Mi selección') }
                        { menuItmes('/search','Buscar por autor') }
                    </ul>
        
                </div>
                </div>
            </div>
        </nav>
    )
}
