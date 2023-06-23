import { Cuerpo } from "../componentes/Cuerpo";
import { Footer } from "../componentes/Footer";
import { Titulo } from "../componentes/Titulo";
export function Inicio(){
    return(
        <>
        <Titulo title='BUSCA LAS ESTADISTICAS DE TU CANAL PREFERIDO'/>
        <Cuerpo/>
        <Footer/>
        </>
    );
}