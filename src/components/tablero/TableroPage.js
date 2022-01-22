import React, { useEffect, useState } from 'react';
import './tablero.css';
import tareaService from '../../services/tareaService';
import Tarea from './tarea/Tarea';
import CrearTarea from './crear/CrearTarea';

const TableroPage = () => {

    const [tareas, setTareas] = useState([]);
    const [crear, setCrear] = useState(false);
    const [accion, setAccion] = useState("lectura");

    useEffect(() => {
        handleLoadTareas();
    }, []);

    const handleSetAccion = (accion) => {
        setAccion(accion);
    }

    const handleLoadTareas = async () => {
        console.log("aja")
        const data = await tareaService.consultarTareas();
        setTareas(data);
    }

    const handleCreate = (estado) => {
        setCrear(estado);
    }

    return (
        <div className='board'>
            <section>
                <div className='head'>
                    <h3>To Do</h3>
                    <hr />
                </div>
                {/* Aqui se llama el componente tarea por cada tarea existente de tipo nuevo */}
                {
                    tareas?.map((tarea) => {
                        if (tarea.estado === 'Nuevo') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={accion} handleSetAccion={handleSetAccion} handleCreate={handleCreate} handleLoadTareas={handleLoadTareas} />
                        } else {
                            return null;
                        }
                    })
                }
                {crear ?
                    <CrearTarea handleCreate={handleCreate} handleLoadTareas={handleLoadTareas}/>
                    :
                    <button
                        type="button"
                        className="btn btn-success nTarea"
                        title='Crear Tarea'
                        onClick={() => {handleCreate(true); handleSetAccion("lectura")}}
                    >
                        +
                    </button>
                }
                <div>

                </div>
            </section>
            <section>
                <div className='head'>
                    <h3>Progress</h3>
                    <hr />
                </div>
                {/* Aqui se llama el componente tarea por cada tarea existente de tipo activo */}
                {
                    tareas.map((tarea) => {
                        if (tarea.estado === 'Activo') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={"lectura"} handleSetAccion={handleSetAccion} />
                        } else {
                            return null;
                        }
                    })
                }
            </section>
            <section>
                <div className='head'>
                    <h3>Done</h3>
                    <hr />
                </div>
                {/* Aqui se llama el componente tarea por cada tarea existente de tipo terminado */}
                {
                    tareas.map((tarea) => {
                        if (tarea.estado === 'Terminado') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={"terminado"} handleSetAccion={handleSetAccion} />
                        } else {
                            return null;
                        }
                    })
                }
            </section>
        </div>
    );
};

export default TableroPage;
