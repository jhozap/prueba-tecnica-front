import axios from "axios"
import { constants } from "../util/constants";

const consultarUsuarios = async () => {
    const { data } = await axios.get( `${constants.baseApi}${constants.listarUsuarios}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

const consultarUsuarioById = async (id) => {
    const { data } = await axios.get( `${constants.baseApi}${constants.listarUsuarios}/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

const guardarUsuario = async (usuario) => {

    const { data } = await axios.post( `${constants.baseApi}${constants.guardarUsuario}`, usuario, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}

const eliminarUsuario = async (id) => {
    const { data } = await axios.delete( `${constants.baseApi}${constants.eliminarUsuario}/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
    return data;
}



export default {
    consultarUsuarios,
    consultarUsuarioById,
    guardarUsuario,
    eliminarUsuario
}