import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './card-style.css';

class Producto extends Component{
    handleClick=(e,id)=>{
        e.preventDefault();
        this.props.obtenerProducto(id);
    }
    render(){
    const {thumbnail,title,original_price,state_name,price,condition,id}=this.props.producto;
        
        return(
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
                    <div class="card text-center shadow">
                        <div className="overflow">
                        <img src={thumbnail} alt=""  className="card-img-top"/>
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">{'$'+price}
                            {/* <div className="ui-item__discount-text "> {parseInt(((precio/original_price)*100))+'% OFF'}</div> */}
                            </h4>
                            <h6 className="card-title">{title} </h6>
                            <p  className="card-text text-secondary">
                            {condition}
                            </p>
                            <div  onClick={(e)=> this.handleClick(e,this.props.id)} className="btn btn-outline-success">Ir al producto</div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Producto;