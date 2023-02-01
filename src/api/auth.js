import axios from "axios";
import "../axios";

export const getData = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const response  = await axios.get('/users',config);
    return response
}
