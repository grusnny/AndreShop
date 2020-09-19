import React, { Component } from 'react'


class InfoProducto extends Component {
    state = {  
        info:this.props.infoProducto(),
        desc:this.props.descripProducto()
    }
    render() {

        return (
            <div className=" container-fluid">
            </div>
        );
    }
}

export default InfoProducto;