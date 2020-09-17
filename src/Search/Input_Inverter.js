import React from 'react'
import { Segment, Input } from 'semantic-ui-react'
import SearchResult from './Search_Result'
var valor='',estado;
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
        estado=1;
        e.preventDefault();
        valor = document.getElementById("texto").value;
        this.setState({value:valor, estado:estado});
        estado=0;
    }

  
    render() {
        const {value} = this.state;
        const {estado} = this.state;
      return (
          <div><form >
                <div className="ui action input">
                    <Input id="texto" type="text" />
                    <button onClick={this.onSubmit} className="ui button">Save</button>
                </div>
          </form>

              <SearchResult busqueda={value} estado={estado} />
          </div>
      );
    }
  }
  export default InputInverted;