
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

export const NavbarTop = () => {
    const { uid } = useAppSelector( state => state.auth);
    


    let navigate = useNavigate();
    const handleLogin = () => {
        console.log('ddd')
        navigate('/login', {replace: true});
        
    }

    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
                    Buscar
                </button>
                <span className='spaceBetween'></span>
                
                    {
                    (!!uid) 
                        ?
                          <button 
                            className="btn btn-outline-danger"
                            
                          >
                            <i className="fas fa-sign-out-alt"></i>
                            <span> Salir</span>
                          </button>

                        : <button 
                            className="btn btn-outline-success"
                            onClick={ () => handleLogin() }>
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Ingresar</span>
                          </button>
                    }
                
            </form>
        </>
    )
}
