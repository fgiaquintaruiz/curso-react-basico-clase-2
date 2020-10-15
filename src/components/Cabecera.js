import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Cabecera(props){

return (
    <header className="jumbotron text-center"><h1>{props.titulo}</h1></header>
)

}

export default Cabecera;