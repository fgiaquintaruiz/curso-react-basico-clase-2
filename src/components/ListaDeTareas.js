import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 
class ListaDeTareas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tareas: [
                { nombre : "Cocinar" },
                { nombre : "Limpiar" }
            ]
        }
    }
 
    clickBoton(){
        // let arrtareas = this.state.tareas;
        // arrtareas.push({nombre:this.state.tareaActual});
        // this.setState({tareas: arrtareas, tareaActual:''});

        this.setState({tareas:[...this.state.tareas,{nombre:this.state.tareaActual}], tareaActual:''})
    }

    tareaChange(event){
        //console.dir(event.target.value);

        this.setState({tareaActual: event.target.value});
    }
 
    render(){
        return (<div>
            <ul className="list-group">
                {this.state.tareas.map( (item) => {
                    return <li className="list-group-item" key={item.nombre}>{item.nombre}</li>
                })}
            </ul>
           
            <input type="text" placeholder="Ingrese el nombre de la tarea" value={this.state.tareaActual} onChange={this.tareaChange.bind(this)}/>
 
            <button className="btn btn-primary btn-block w-25 mt-5 mx-auto rounded-pill"
                    onClick={this.clickBoton.bind(this)}>
                Agregar Elemento
            </button>
        </div>)
    }
}
 
export default ListaDeTareas;