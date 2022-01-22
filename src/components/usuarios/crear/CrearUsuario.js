import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import usuarioService from '../../../services/usuarioService';

const CrearUsuario = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const handleCreate = async (args) => {
        try {
            const data = await usuarioService.guardarUsuario(args);
            navigate('/usuarios', {
                        replace: true
                    })
        } catch (error) {
            console.log();
        }

    }


    return (
        <form onSubmit={handleSubmit(handleCreate)} autoComplete='off'>
            <div className="form-group">
                <input type="number" className='form-control mb-3' placeholder="Id" {...register("id", { required: true })} hidden />
            </div>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre" {...register("nombre", { required: true })} />
            </div>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Apellido" {...register("apellido", { required: true })} />
            </div>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

            </div>
            <div className="form-group">
                <input type="password" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />

            </div>

            <input className='btn btn-success' type="submit" />

        </form>
    );
};

export default CrearUsuario;
