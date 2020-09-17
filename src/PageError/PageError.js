import React, { Component } from 'react';
import './style.css'
class PageError extends Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
          </div>
          <h2>404 - Página no encontrada</h2>
          <p>Es posible que la página que está buscando se haya eliminado si se cambió el nombre o no está disponible temporalmente.</p>
          <a href="/home">Ir a Home</a>
        </div>
      </div>

    );
  }
}

export default PageError;
