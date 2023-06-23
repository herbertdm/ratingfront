import '../estilos/Footer.css';
import Iconos from './Iconos';

export function Footer(){
    return(
        <footer>
            <div className="contacto">
                <h3>Contacto</h3>
                <p>Campus Universitario, final Av. Andrés Bello - Calle 32 - Cota Cota</p>
                <p>Av. Mariscal Andrés de Santa Cruz 1175 - Plaza Obelisco</p>
                <p>iea@umsa.bo</p>
            </div>
            <div className="redes-sociales">
                <h3>Redes sociales</h3>
                <Iconos/>
            </div>
        </footer>
    );
}