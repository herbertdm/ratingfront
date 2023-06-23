import {Link} from 'react-router-dom';
import '../estilos/Iconos.css';
import { Component } from 'react';
import { FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

class Iconos extends Component{
    render(){
        return(
            <div>
                <Link to='https://twitter.com/ieaumsa' target='_blank'><FaTwitter className='iconos'/></Link>
                <Link to='https://www.facebook.com/ieaumsa/' target='_blank'><FaFacebook className='iconos'/></Link>
                <Link to='mailto:ieainfoumsa@gmail.com' target='_blank'><FaEnvelope className='iconos'/></Link>
                
                
            </div>
        );
    }
}
export default Iconos;