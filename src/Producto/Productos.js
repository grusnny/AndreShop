import React, { Component } from 'react'


class Productos extends Component {
    state = {  
        producto:localStorage.getItem('producto')
    }
    render() {
        return (
            <div className="container text-center">

            </div>
        );
    }
}

export default Productos;