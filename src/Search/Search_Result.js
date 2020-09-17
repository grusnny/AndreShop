import React, {Component} from 'react';

class SearchResult extends Component{
    constructor(props){
        super(props);

        this.state = {
            busqueda : "",
        };

    }
    render(){
        const {busqueda} = this.props;
        return(
            <div>
                <h1>{busqueda}</h1>
            </div>
        );
    }
}

export default SearchResult;