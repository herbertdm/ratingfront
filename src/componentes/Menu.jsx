import {Link} from 'react-router-dom';
import '../estilos/Menu.css';

export function Menu(){
    return(
        <div className="contenedor-menu">
            <div className="logo">RatingIEA</div>
            <div className="menu-nav">
                <ul>
                    <li><Link className='menu-comp' to="/Inicio">Inicio</Link></li>
                    <li><Link className='menu-comp' to="/Consultas">Consultas</Link></li>
                    <li><Link className='menu-comp' to="https://iea.umsa.bo/index.php/quienes-somos/" target='_blank'>Quienes somos</Link></li>
                    <li><Link className='menu-comp' to="https://iea.umsa.bo/index.php/contacto/" target='_blank'>Contáctanos</Link></li>
                </ul>
            </div>
            <div className="registro"><Link to="/Ingresar">Ingresar</Link></div>
        </div>
    );
}