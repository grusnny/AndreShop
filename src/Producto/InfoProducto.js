import React, { Component } from 'react'


class InfoProducto extends Component {
    state = {  
        info:this.props.infoProducto
    }
    render() {
        const[title,price,original_price,available_quantity,pictures,]=this.state.info
        return (
            <div className="container text-center">
 
                    <div class="container text-center shadow">
                        <div className="overflow">
                        {/* <img src={} alt=""  className="card-img-top"/> */}
                        </div>
                        <div className="text-dark">
                            <h4 className="card-title">{'$'+this.state.info.price}
                            {/* <div className="ui-item__discount-text "> {parseInt(((precio/original_price)*100))+'% OFF'}</div> */}
                            </h4>
                            <h6 className="card-title">{title} </h6>
                            <p  className="card-text text-secondary">
                            </p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default InfoProducto;