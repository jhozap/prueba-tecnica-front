import React, { useEffect, useState } from 'react';
import './tablero.css';
import tareaService from '../../services/tareaService';
import Tarea from './tarea/Tarea';

const TableroPage = () => {

    const [tareas, setTareas] = useState([]);
    const [accion, setAccion] = useState("lectura");

    const handleSetAccion = (accion) => {

        console.log(accion);

        setAccion(accion);
    }



    const handleLoadTareas = async () => {

        const data = await tareaService.consultarTareas();

        console.log(data);

        setTareas(data);
    }

    useEffect(() => {
        handleLoadTareas();
    }, []);

    return (
        <div className='board'>
            <section>
                <div className='head'>
                    <h3>To Do</h3>
                    <hr />
                </div> 
                {/* Aqui se llama el componente tarea por cada tarea existente de tipo nuevo */}
                {
                    tareas.map((tarea) => {
                        if(tarea.estado === 'Nuevo') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={accion} handleSetAccion={handleSetAccion}/>
                        }
                    })
                }
                <div>
                    <button type="button" className="btn btn-success nTarea" title='Crear Tarea'>+</button>
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
                        if(tarea.estado === 'Activo') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={"lectura"} handleSetAccion={handleSetAccion}/>
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
                        if(tarea.estado === 'Terminado') {
                            return <Tarea key={tarea.id} tarea={tarea} accion={"terminado"} handleSetAccion={handleSetAccion}/>
                        }
                    })
                }
            </section>
        </div>
    );
};

export default TableroPage;
