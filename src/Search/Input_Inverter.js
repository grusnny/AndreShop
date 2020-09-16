import React from 'react'
import { Segment, Input } from 'semantic-ui-react'
class InputInverted extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Se esta realizando la busqueda de: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div class="ui action input">
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
              <button class="ui button">Search</button>
        </div>
        </form>
      );
    }
  }
  export default InputInverted;