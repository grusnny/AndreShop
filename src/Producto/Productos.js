import React, { Component } from 'react'
import ProductoDescrip from './InfoProducto';

class Productos extends Component {
    state = {  
        producto:localStorage.getItem('productoConsult'),
        informacionProducto:[],
        descripcionProducto:[]
    }
    infoProducto=()=>{
        const id=this.state.producto;
        const url= `https://api.mercadolibre.com/items/${id}?include_attributes=all`;

        fetch (url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>this.setState({infoProducto:resultado.results}))

        return this.state.infoProducto
    }
    descripcionProducto=()=>{
        const id=this.state.producto;
        const url= `https://api.mercadolibre.com/items/${id}/description`;

        fetch (url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>this.setState({descripcionProducto:resultado.results}))
        
        return this.state.descripcionProducto
    }
    render() {
        return (
            <div className="container text-center">
                {this.infoProducto()}
                {this.state.informacionProducto.title}
                <ProductoDescrip infoProducto={this.infoProducto}/>
            </div>
        );
    }
}

export default Productos;