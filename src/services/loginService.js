import axios from "axios"
import { constants } from "../util/constants"

const login = async (email, password) => {
    const { data } = await axios.post( `${constants.baseApi}${constants.login}`, { email, password });
    return data;
}

export default {
    login
}