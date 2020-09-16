import React from 'react';
import './App.css';
import Home from './Home/home'
import PageError from './PageError/PageError';
import SearchPage from './Search/Search_Page'
import MenuInvertedSecondary  from './Home/Barra_desplazamiento' 
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <BrowserRouter>
        <div>
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
              render={() => <SearchPage/>} />
            <Route
              exact
              path="/"
              render={() => <Home/>} />
            <Route
              exact
              path=""
              render={() => <Home />} />
            <Route
              exact
              path=""
              render={() => <Home/>} />
              <Route
              exact
              path=""
              render={() => <Home/>} />
              <Route
              exact
              path=""
              render={() => <Home/>} />
              <Route
              exact
              path=""
              render={() => <Home/>} />
              <Route
              exact
              path=""
              render={() => <Home/>} />
            <Route component={PageError} />
          </Switch>
        </div>

      </BrowserRouter>
  );
}

export default App;
