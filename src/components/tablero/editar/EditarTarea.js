import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import tareaService from '../../../services/tareaService';

const EditarTarea = ({tarea, handleAccion, handleLoadTareas}) => {

    const { register, handleSubmit } = useForm({
        defaultValues: tarea
    });

    const handleCancelarAccion = (estado) => {
        handleAccion(estado);
    }

    const handleUpdateTarea = async (args) => {
        try {

            console.log(args);
            const data = await tareaService.guardarTarea(args);
            handleLoadTareas();
            handleAccion("lectura");

        } catch (error) {
            console.log()
        }
    }


    return (
        <form onSubmit={handleSubmit(handleUpdateTarea)} autoComplete='off'>
            <div className="card space">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" className='form-control mb-3' placeholder="Titulo" {...register("titulo", { required: true })} />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control mb-3' placeholder="Descripcion" {...register("descripcion", { required: true })} />
                    </div>
                    <select className="form-select" placeholder='Seleccione un estado' {...register("estado", { required: true })}>
                        <option value="Nuevo">Nuevo</option>
                        <option value="Activo">Activo</option>
                        <option value="Terminado">Terminado</option>
                    </select>
                    <br />

                    <button
                        type="submit"
                        className="btn btn-primary"
                        title='Actualizar Tarea'
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger eTarea"
                        title='Cancelar'
                        onClick={() => handleCancelarAccion("lectura")}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditarTarea;
