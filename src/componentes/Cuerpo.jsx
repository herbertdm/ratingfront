import '../estilos/Cuerpo.css';

export function Cuerpo(){
    return(
        <div className="cuerpo">
            <article>
                <p>Estas son las estadísticas diarias de los canales nacionales más vistos, recuerda que si deseas mas detalles al respecto tenemos un plan que estamos seguros que te encantará, de este modo podras tener otras opciones como ser el periodo de visualización de uno o varios canales en específico y mucho más.</p>
            </article>
            <aside>
                <div className="grafica"></div>
            </aside>
        </div>
    );
}