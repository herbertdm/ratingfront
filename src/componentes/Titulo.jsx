import '../estilos/Titulo.css'

export function Titulo(props){
    return(
        <div className="titulo">
            <h1>{props.title}</h1>
        </div>
    );
}