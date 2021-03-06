import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import EditarTarea from '../editar/EditarTarea';

import '../tablero.css'
import tareaService from '../../../services/tareaService';

const Tarea = ({ tarea, accion, handleSetAccion, handleCreate, handleLoadTareas }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: tarea
    });

    const [index, setIndex] = useState(null);

    const handleEditar = () => {
        handleSetAccion("editar");
        handleCreate(false);
    }

    const handleAccion = (accion) => {
        handleSetAccion(accion);
        setIndex(null);
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

    const handleDelete = async (id) => {
        try {
            await tareaService.eliminarTarea(id);
            handleLoadTareas();
            handleAccion("lectura");
        } catch (error) {
            console.log()
        }
    }

    return (
        <>
            {accion !== 'editar' &&
                <div className="card space">
                    <div className="card-body">
                        <h5 className="card-title">{tarea.titulo}</h5>
                        <p className="card-text">{tarea.descripcion}</p>
                        <form onSubmit={handleSubmit(handleUpdateTarea)} autoComplete='off'>
                            <select className="form-select" placeholder='Seleccione un estado' {...register("estado", { required: true })} disabled={tarea.estado === 'Nuevo'}>
                                <option value="Nuevo">Nuevo</option>
                                <option value="Activo">Activo</option>
                                <option value="Terminado">Terminado</option>
                            </select>
                            <br />
                            {
                                tarea.estado !== "Nuevo" &&
                                    <>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            title='Actualizar Tarea'
                                        >
                                            Guardar
                                        </button>
                                    </>
                            }

                        </form>


                        {accion === "lectura" && tarea.estado === "Nuevo" &&
                            <>
                                <button
                                    type="button"
                                    className="btn btn-secondary eTarea"
                                    title='Editar Tarea'
                                    onClick={() => {handleEditar(); setIndex(tarea.id)}}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger eTarea"
                                    title='Eliminar Tarea'
                                    onClick={() => handleDelete(tarea.id)}
                                >
                                    Eliminar
                                </button>
                            </>

                        }

                    </div>
                </div>
            }
            {accion === 'editar' &&  index === tarea.id &&
                <EditarTarea key={tarea.id} tarea={tarea} handleAccion={handleAccion} handleLoadTareas={handleLoadTareas} />
            }
        </>

    );
};

export default Tarea;
