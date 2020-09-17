import React, {Component} from 'react';
import InputInverter from './Input_Inverter';
import Resultado from './Resultados';

class SearchPage extends Component {
    state={
        termino: '',
        resultadoBusqueda: []
    }
    datosBusqueda=(termino)=>{
        this.setState({
            termino //termino:termino
        }, () => {
            this.consultarApi(); //calllback luego de actualizar los props
        })
    }
    consultarApi=()=>{
        const termino=this.state.termino;
        const url= `https://api.mercadolibre.com/sites/MCO/search?q=${termino}`;

        fetch (url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>this.setState({resultadoBusqueda:resultado.results}))
    }
    render() {
        return (
            <div className="container-fluid" >
                <div className="jumbotron" align="center">
                <InputInverter
                    datosBusqueda={this.datosBusqueda}
                />
                </div>
                <div className="app-container">
                <Resultado
                    resultado={this.state.resultadoBusqueda}
                />
                </div>
             </div>
             
            );
  }
}
export default SearchPage;