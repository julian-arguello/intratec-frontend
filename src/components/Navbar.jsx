import { Link } from 'react-router-dom';
import { useAuth } from '../context/Auth.Context';
import authRole from '../services/auth.role';
import RoleSuperAdmin from './authRole/RoleSuperAdmin';

function Navbar(){
    const { state, logout } = useAuth()
    const isMobile = window.innerWidth < 576;
    //const menu = document.getElementById("mySidebar");
    let button = isMobile ? "&#9776;" : "&times;";

    function toggleMenu() {
        let menu = document.getElementById("mySidebar");
        let main = document.getElementById("main");
        let actionBtn = document.getElementById("closebtn")
        if(!menu.classList.contains("closeSidebar")) {
            actionBtn.innerHTML = "&#9776;";
        } else {
            actionBtn.innerHTML = "&times;";
        }
        menu.classList.toggle("closeSidebar");
        main.classList.toggle("main-margin-close");
    }
    
    return(
        
        <nav id='mySidebar' className={`${isMobile ? "sidebar closeSidebar" : "sidebar"}`}>
            <span id='closebtn' className='pe-auto' onClick={toggleMenu} dangerouslySetInnerHTML={{__html: button}} role="button">
            </span>
            <ul className='p-0 d-flex flex-column justify-content-sm-between mb-0'>
                <li>
                    <div className='d-flex align-items-center mb-4 user'>
                        <div className='me-2'>
                            <span className="icon-usuario primario f-60"></span>
                        </div>
                        <div className='ms-2 text-white'>
                            <h2 className='d-block mb-2 h6'>{state.user.name + " " + state.user.lastname}  </h2>
                            <small><span className='d-block'>{authRole(state.user.role.role_name)}</span></small>
                        </div>
                    </div>
                    <hr className='hr mb-4' />
                    <h3 className='h5 text-white mb-4'>General</h3>
                    <ul className='p-0 nav-links'>
                        <li className='mb-3'>
                            <Link to='/inicio' onClick={ isMobile ? toggleMenu : ''} className="d-flex align-items-center">
                                <span className="icon-tablero me-3"></span>Tablero principal
                            </Link>
                        </li>
                        <li className='mb-3'>
                            <Link to='/servicios' onClick={ isMobile ? toggleMenu : ''} className="d-flex align-items-center">
                                <span className="icon-servicios me-3"></span>
                                Servicios
                            </Link>
                        </li>
                        <li className='mb-3'>
                            <Link to='/clientes' onClick={ isMobile ? toggleMenu : ''} className="d-flex align-items-center">
                                <span className="icon-clientes me-3"></span>
                                Clientes
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <hr className='hr mb-4' />      
                    <ul className='p-0'>
                        <RoleSuperAdmin>
                            <li className='mb-3 d-flex align-items-center'>
                                <Link to='/usuarios' onClick={ isMobile ? toggleMenu : ''} className="d-flex align-items-center">
                                    <span className="icon-usuarios me-3"></span>
                                    Usuarios
                                </Link>
                            </li>
                        </RoleSuperAdmin>
                        <li className='mb-3 d-flex align-items-center'>
                            <Link to='/perfil' onClick={ isMobile ? toggleMenu : ''} className="d-flex align-items-center">
                                <span className="icon-perfil me-3"></span>
                                Ver perfil
                            </Link>
                        </li>
                        <li className='mb-3 d-flex align-items-center'>
                            <Link to='/' onClick={() => logout()} className="d-flex align-items-center">
                                <span className="icon-logout me-3"></span>
                                Cerrar sesión
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;