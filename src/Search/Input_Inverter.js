import React from 'react'
import { Segment, Input } from 'semantic-ui-react'
import SearchResult from './Search_Result'
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
        const {value} = this.state;
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div class="ui action input">
                  <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search..."/>
                  <button class="ui button">Search</button>
            </div>
            </form>
              <SearchResult busqueda={value} />
          </div>
      );
    }
  }
  export default InputInverted;