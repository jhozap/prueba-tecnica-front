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

export default {
    consultarTareas
}