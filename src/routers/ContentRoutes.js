import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import UsuariosPage from '../components/usuarios/UsuariosPage';

import '../app.css'
import TableroPage from '../components/tablero/TableroPage';

const ContentRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid content">
                <div className="row">
                    <Routes>
                        <Route path="usuarios/:action" element={<UsuariosPage />} />
                        <Route path="usuarios" element={<UsuariosPage />} />
                        <Route path="tablero" element={<TableroPage />} />

                        <Route path="/" element={
                            <Navigate to="/tablero" />
                        } />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default ContentRoutes;
