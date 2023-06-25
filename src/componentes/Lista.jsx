import '../estilos/Lista.css';
import { useEffect, useState } from 'react';
import { ListaDatos } from '../api/lista.api';

export function Lista() {
  const [canalesMasVistos, setCanalesMasVistos] = useState([]);
  const [canalesMasVistasHoras, setCanalesMasVistasHoras] = useState([]);

  useEffect(() => {
    async function cargarCanalesMasVistos() {
      const respuesta = await ListaDatos();
      const datos = respuesta.data;

      // Objeto para almacenar la frecuencia de visualización por canal
      const frecuenciaPorCanal = {};
      // Calcular la frecuencia de visualización por canal
      datos.forEach((dato) => {
        const canal = dato.channel;
        frecuenciaPorCanal[canal] = (frecuenciaPorCanal[canal] || 0) + 1;
      });

      // Ordenar los canales según la frecuencia en orden descendente
      const canalesOrdenados = Object.keys(frecuenciaPorCanal).sort(
        (a, b) => frecuenciaPorCanal[b] - frecuenciaPorCanal[a]
      );

      // Obtener los 3 canales más vistos
      const canalesTop3 = canalesOrdenados.slice(0, 3);

      // Obtener información adicional de la frecuencia de visualización para los canales top 3
      const canalesConInformacion = canalesTop3.map((canal) => {
        const frecuencia = frecuenciaPorCanal[canal];
        return { canal, frecuencia };
      });

      setCanalesMasVistos(canalesConInformacion);
    }

    async function cargarCanalesMasVistasHoras() {
      const respuesta = await ListaDatos();
      const datos = respuesta.data;

      // Objeto para almacenar la duración total de visualización por canal
      const duracionPorCanal = {};
      // Calcular la duración total por canal
      datos.forEach((dato) => {
        const canal = dato.channel;
        const duracion = calcularDuracion(dato.start_time, dato.end_time);
        duracionPorCanal[canal] = (duracionPorCanal[canal] || 0) + duracion;
      });

      // Ordenar los canales según la duración total en orden descendente
      const canalesOrdenados = Object.keys(duracionPorCanal).sort(
        (a, b) => duracionPorCanal[b] - duracionPorCanal[a]
      );

      // Obtener los 3 canales con más horas de visualización
      const canalesTop3 = canalesOrdenados.slice(0, 3);

      // Obtener información adicional de fecha y duración total para los canales top 3
      const canalesConInformacion = canalesTop3.map((canal) => {
        const duracionTotal = duracionPorCanal[canal];
        const duracionFormateada = formatearDuracion(duracionTotal);
        const fechasCorrespondientes = obtenerFechasCorrespondientes(datos, canal);
        return { canal, duracionTotal: duracionFormateada, fechasCorrespondientes };
      });

      setCanalesMasVistasHoras(canalesConInformacion);
    }

    cargarCanalesMasVistos();
    cargarCanalesMasVistasHoras();
  }, []);

  // Función para calcular la duración en segundos entre dos tiempos
  function calcularDuracion(tiempoInicio, tiempoFin) {
    const inicio = new Date(`1970-01-01T${tiempoInicio}Z`);
    const fin = new Date(`1970-01-01T${tiempoFin}Z`);
    return (fin - inicio) / 1000; // Duración en segundos
  }

  // Función para formatear la duración en formato de horas:minutos:segundos
  function formatearDuracion(duracionTotal) {
    const horas = Math.floor(duracionTotal / 3600);
    const minutos = Math.floor((duracionTotal % 3600) / 60);
    const segundos = Math.floor(duracionTotal % 60);
    return `${horas}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  }

  // Función para obtener las fechas correspondientes a un canal específico
  function obtenerFechasCorrespondientes(datos, canal) {
    const fechas = new Set();
    datos.forEach((dato) => {
      if (dato.channel === canal) {
        fechas.add(dato.ch_date);
      }
    });
    return Array.from(fechas);
  }

  return (
    <div className="lista">
      <h2>Lista de los canales mas vistos</h2>
      <div className="tabla-container">
        <h3>Los 3 canales más vistos por frecuencia:</h3>
        <table className="tabla">
          <thead>
            <tr>
              <th>Canal</th>
              <th>Frecuencia</th>
            </tr>
          </thead>
          <tbody>
            {canalesMasVistos.map((canal) => (
              <tr key={canal.canal}>
                <td>{canal.canal}</td>
                <td>{canal.frecuencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tabla-container">
        <h3>Los 3 canales con más horas de visualización:</h3>
        <table className="tabla">
          <thead>
            <tr>
              <th>Canal</th>
              <th>Duración total</th>
              <th>Fechas correspondientes</th>
            </tr>
          </thead>
          <tbody>
            {canalesMasVistasHoras.map((canal) => (
              <tr key={canal.canal}>
                <td>{canal.canal}</td>
                <td>{canal.duracionTotal}</td>
                <td>
                  <ul>
                    {canal.fechasCorrespondientes.map((fecha, index) => (
                      <li key={index}>{fecha}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}