import React from 'react'
import { Segment, Input } from 'semantic-ui-react'

class InputInverted extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          estado:'',

      };

      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        //Tomamos el valor del input 
        const valor = document.getElementById("texto").value;

        //Lo enviamos al componente principal
        this.props.datosBusqueda(valor);
    }

  
    render() {
        const {value} = this.state;
        const {estado} = this.state;
      return (
          <div><form >
                <div className="ui action input">
                    <Input id="texto" type="text" />
                    <button onClick={this.onSubmit} className="ui button">Buscar</button>
                </div>
          </form>
          </div>
      );
    }
  }
  export default InputInverted;