import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./nav.css";

const NavBar = () => {

    const auth = useAuth();

    const handleLogout = () => {

        auth.logout();

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand ml-5"
                to="/"
            >
                KANBAN
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/tablero"
                    >
                        Tablero
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                        to="/usuarios"
                    >
                        Usuarios
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        Bienvenido ~ {auth.user}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
