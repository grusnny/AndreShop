import React, { Component } from 'react'
import ProductoDescrip from './InfoProducto';
import './card-style.css';

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
            .then(resultado =>this.setState({informacionProducto:resultado}))
        
    }
    descripProducto=()=>{
        const id=this.state.producto;
        const url= `https://api.mercadolibre.com/items/${id}/description`;

        fetch (url)
            .then(respuesta =>respuesta.json())
            .then(resultado =>this.setState({descripcionProducto:resultado}))
        
        
    }
    render() {
        return (
            <div className="container-fluid">
                <ProductoDescrip descripProducto={this.descripProducto} infoProducto={this.infoProducto}/>
                <div className="container" >
                
                    <div class="card-body shadow" >
                        <div className="overflow">
                         <img src={this.state.informacionProducto.thumbnail} alt=""  className="card-img-top"/> 
                        </div>
                        <div className=" text-center text-dark">
                            <h4 className="card-title">{this.state.informacionProducto.title}
                            {/* <div className="ui-item__discount-text "> {parseInt(((precio/original_price)*100))+'% OFF'}</div> */}
                            </h4>
                            <h5 className="card-title">${this.state.informacionProducto.price} </h5>
                            <p  className="card-text text-secondary">
                            {this.state.descripcionProducto.plain_text}
                            </p>
                        </div>
                    </div>
            </div>
            </div>
        );
    }
}

export default Productos;