import React, { Component } from 'react'
import Producto from './Producto';
import Paginacion from './Paginacion';

class Resultados extends Component {
    mostrarResultados=()=>{
        const resultados=this.props.resultado;

        if (resultados.length === 0) return null;

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {resultados.map(resultado =>(
                        <Producto
                            key={resultado.id}
                            producto={resultado}
                        />
                    ))}
                </div>
                    <Paginacion
                        paginaBusqueda={this.props.paginaBusqueda}
                        totalResultados={this.props.totalResultados}
                    />
            </React.Fragment> 
        )
    }
    render() {
        return (
            <React.Fragment>
            {this.mostrarResultados()}
            </React.Fragment>
        );
    }
}

export default Resultados;