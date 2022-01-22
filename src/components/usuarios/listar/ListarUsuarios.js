import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import usuarioService from '../../../services/usuarioService';

const ListarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    const handleLoadUsuarios = async () => {

        const data = await usuarioService.consultarUsuarios();

        setUsuarios(data); 
    }

    useEffect(() => {
        handleLoadUsuarios();
    }, []);

    const handleDelete = async (id) => {
        try {
            await usuarioService.eliminarUsuario(id);
            handleLoadUsuarios();
        } catch (error) {
            console.log()
        }
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario, index) => (
                        <tr key={usuario.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{usuario.nombre} {usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <NavLink className="btn btn-primary mr" to={`/usuarios/${usuario.id}`}>
                                    Editar
                                </NavLink>
                                <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default ListarUsuarios;
