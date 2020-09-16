import React, {Component} from 'react';
import InputInverter from './Input_Inverter';
const axios = require('axios');
class SearchPage extends Component {
    Consultar(){
        var valor;
        const querystring = require('querystring');
        axios.post('https://api.mercadolibre.com/sites/MCO/search?q=iphone', querystring.stringify({}))
            .then(function(res) {
                if(res.status==200) {
                    valor=res.data;
                    console.log(res);

                    if(valor==1){
                        window.location.href="/categorias";
                        console.log("el valor es: 1");
                    }else{
                        window.location.href="/logincorreo";
                        console.log("el valor es: 0");
                    }
                        
                }
            }).catch(function(err) {
                    console.log(err);
                    window.location.href="/categorias";
            })
            .then(function() {
                    //loading.style.display = 'none';
                    console.log("Estoy aqui");

            });

    }

    render() {
        return (
            <div aling="center" >
                <InputInverter/>   
             </div>
            );
  }
}
export default SearchPage;