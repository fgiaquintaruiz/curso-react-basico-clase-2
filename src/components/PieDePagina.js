import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PieDePagina extends Component {

    constructor(props){
        super(props);
    }

    render(){
            return (<footer className="alert alert-info text-center fixed-bottom mb-0">
               {this.props.texto} Desarrollado por {this.props.autor}. Copyright &copy; {this.props.anio}
            </footer>)
    }
}

export default PieDePagina;