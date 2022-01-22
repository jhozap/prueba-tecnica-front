import React from 'react';
import { useForm } from 'react-hook-form';
import tareaService from '../../../services/tareaService';

const CrearTarea = ({ handleCreate, handleLoadTareas }) => {

    const { register, handleSubmit } = useForm();

    const handleCancelarAccion = (estado) => {
        handleCreate(estado);
    }

    // const tarea = {
    //     titulo: "prueba",
    //     descripcion: "aaa",
    //     estado: "Nuevo"
    // }

    const handleCreateTarea = async (args) => {
        try {
            console.log(args);
            const data = await tareaService.guardarTarea(args);
            handleLoadTareas();
            handleCreate(false);
        } catch (error) {
            console.log()
        }
    }

    return (
        <form onSubmit={handleSubmit(handleCreateTarea)} autoComplete='off'>
            <div className="card space">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" className='form-control mb-3' placeholder="Titulo" {...register("titulo", { required: true })} />
                    </div>
                    <div className="form-group">
                        <input type="text" className='form-control mb-3' placeholder="Descripcion" {...register("descripcion", { required: true })} />
                    </div>
                    <select className="form-select" placeholder='Seleccione un estado' {...register("estado", { required: true })} disabled>
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
                        onClick={() => handleCancelarAccion(false)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CrearTarea;
