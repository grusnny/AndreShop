import React from 'react'
import './card-style.css';

const Producto=(props)=>{
    const {thumbnail,title,original_price,state_name}=props.producto;
    return(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                <div class="card text-center shadow">
                    <div className="overflow">
                    <img src={thumbnail} alt="" className="card-img-top"/>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{title}</h4>
                        <p  className="card-text text-secondary">
                            Prueba de texto
                        </p>
                        <a href="#" className="btn btn-outline-success">Ir al producto</a>
                    </div>
                </div>
            </div>
    )
}

export default Producto;