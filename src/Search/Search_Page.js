import React, {Component} from 'react';
import InputInverter from './Input_Inverter';
import Resultado from './Resultados';

class SearchPage extends Component {
    state={
        termino: '',
        resultadoBusqueda: [],
        pagina:0,
        totalResultados:0
    }
    paginaBusqueda=(pagina)=>{
        this.setState({
             pagina:(pagina-1)*50
        }, () => {
             this.consultarApi();
        })
    }
    datosBusqueda=(termino)=>{
        this.setState({
            termino //termino:termino
        }, () => {
            this.consultarApi(); //calllback luego de actualizar los props
        })
    }
    validarResultados=(resultado)=>{
        if(resultado.paging.total>1000){
            this.setState({totalResultados:1000})
        }
        else{
            this.setState({totalResultados:resultado.paging.total})
        }
    }
    consultarApi=()=>{
        const termino=this.state.termino;
        const paginacion=this.state.pagina;
        const url= `https://api.mercadolibre.com/sites/MCO/search?q=${termino}&offset=${paginacion}`;

        fetch (url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>this.setState({resultadoBusqueda:resultado.results},this.validarResultados(resultado)))
    }
    render() {
        return (
            <div className="container-fluid" >
                <div className="jumbotron" align="center">
                <InputInverter
                    datosBusqueda={this.datosBusqueda}
                />
                </div>
                <div  className="row justify-content-center">
                <Resultado
                    resultado={this.state.resultadoBusqueda}
                    paginaBusqueda={this.paginaBusqueda}
                    totalResultados={parseInt((this.state.totalResultados/50), 10)}
                    obtenerProducto={this.props.obtenerProducto}
                />
                </div>
             </div>
            );
  }
}
export default SearchPage;