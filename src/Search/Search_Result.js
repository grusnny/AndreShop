import React, {Component} from 'react';
const axios = require('axios');

class SearchResult extends Component{
    constructor(props){
        super(props);

        this.state = {
            busqueda : "",
            estado:"",
        };
    }
    Consultar(busqueda,estado){
        if(estado ==1) {
            var valor;
            const querystring = require('querystring');
            axios.post('https://api.mercadolibre.com/sites/MCO/search?q=' + busqueda + '', querystring.stringify({}))
                .then(function (res) {
                    if (res.status == 200) {
                        valor = res.data;
                        console.log(res);

                        if (valor == 1) {
                            // window.location.href="/categorias";
                            console.log("el valor es: 1");
                        } else {
                            // window.location.href="/logincorreo";
                            console.log("el valor es: 0");
                        }

                    }
                }).catch(function (err) {
                console.log(err);
                // window.location.href="/categorias";
            })
                .then(function () {
                    //loading.style.display = 'none';
                    console.log("Estoy aqui");

                });
        }

    }
    render(){
        const {busqueda} = this.props;
        const {estado} = this.props;
        return(
            <div>

                <h1>{this.Consultar(busqueda,estado)}</h1>
            </div>
        );
    }
}

export default SearchResult;