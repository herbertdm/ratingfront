import axios from "axios"
export const ListaDatos = () => {
    return axios.get('http://localhost:8000/tasks/api/v1/schedules/');
}