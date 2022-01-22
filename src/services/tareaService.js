import axios from "axios"
import { constants } from "../util/constants";

const consultarTareas = async () => {
    const { data } = await axios.get( `${constants.baseApi}${constants.listarTareas}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

const guardarTarea = async (tarea) => {

    const { data } = await axios.post( `${constants.baseApi}${constants.guardarTarea}`, tarea, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

const eliminarTarea = async (id) => {
    const { data } = await axios.delete( `${constants.baseApi}${constants.eliminarTarea}/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

export default {
    consultarTareas,
    guardarTarea,
    eliminarTarea
}