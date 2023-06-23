import axios from "axios"
export const ListaDatos = () => {
    return axios.get('https://djangoback-4yk2.onrender.com/tasks/api/v1/schedules/');
}