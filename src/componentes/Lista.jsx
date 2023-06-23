import '../estilos/Lista.css'
import { useEffect, useState } from 'react';
import {ListaDatos} from '../api/lista.api';

export function Lista(){
    const [dato1, dato2] = useState([]);

    useEffect(()=>{
        async function CargarLista(){
            const respuesta = await ListaDatos();
            console.log(respuesta);
            dato2(respuesta.data);
        }
        CargarLista();
    },[]);

    return(
        <div className="lista">
            <h2>Lista de datos de usuarios que incluyen canal, fecha y hora de visualización</h2>
            {dato1.map(dato => (
                <div>
                    <table>
                        <tr>
                            <td>Canal</td>
                            <td>Fecha</td>
                            <td>Hora de Inicio</td>
                            <td>Hora de final</td>
                        </tr>
                        <tr>
                            <td>{dato.channel}</td>
                            <td>{dato.ch_date}</td>
                            <td>{dato.start_time}</td>
                            <td>{dato.end_time}</td>
                        </tr>
                    </table>
                    {/*<h2>Canal: {dato.channel}</h2>
                    <h2>Fecha: {dato.ch_date}</h2>
                    <h2>Hora inicio: {dato.start_time}</h2>
                    <h2>Hora final: {dato.end_time}</h2>
            <h2>Usuario: {dato.user_device}</h2>*/}
                </div>
            ))}
        </div>
    )
}