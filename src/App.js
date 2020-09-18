import React, {Component} from 'react';
import './App.css';
import Home from './Home/home'
import PageError from './PageError/PageError';
import SearchPage from './Search/Search_Page'
import MenuInvertedSecondary  from './Home/Barra_desplazamiento' 
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Producto from './Producto/Productos';
class App extends Component {
  state={
    producto:''
  }
  obtenerProducto=(producto)=>{
    this.setState({
      producto
    })
 

    window.location.href = "/producto";
  }

  render (){
    return(
    <BrowserRouter>
          <MenuInvertedSecondary/>
          <Switch>
           <Route exact path="/" 
           component={Home}/>
           <Route
              exact
              path="/home"
              render={() => <Home/>} />
            <Route
              exact
              path="/busqueda"
              render={() => <SearchPage
                obtenerProducto={this.obtenerProducto}
              />} />
              <Route
              exact
              path="/producto"
              render={() => <Producto producto={this.state.producto}/>} />
            <Route component={PageError} />
          </Switch>
          <footer className="page-footer font-small blue pt-4">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
              <a href="http://localhost:3000/"> AndresShop.com</a>
            </div>
          </footer>
      </BrowserRouter>
    );
  }
}

export default App;
