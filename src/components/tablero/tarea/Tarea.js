import React from 'react';

import '../tablero.css'

const Tarea = ({ tarea, accion, handleSetAccion }) => {

    return (
        <>
            {accion !== 'editar' &&
                <div className="card space">
                    <div className="card-body">
                        <h5 className="card-title">{tarea.titulo}</h5>
                        <p className="card-text">{tarea.descripcion}</p>
                        <select className="form-select" placeholder='Seleccione un estado' defaultValue={tarea.estado} disabled={accion === 'lectura'}>
                            <option value="Nuevo">Nuevo</option>
                            <option value="Activo">Activo</option>
                            <option value="Terminado">Terminado</option>
                        </select>
                        <br />

                        <button
                            type="button"
                            className="btn btn-primary"
                            title='Actualizar Tarea'
                        >
                            Guardar
                        </button>

                        {accion === "lectura" &&
                            <>
                                <button
                                    type="button"
                                    className="btn btn-secondary eTarea"
                                    title='Editar Tarea'
                                    onClick={() => { handleSetAccion("editar") }}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger eTarea"
                                    title='Eliminar Tarea'
                                >
                                    Eliminar
                                </button>
                            </>

                        }

                    </div>
                </div>
            }
        </>

    );
};

export default Tarea;
