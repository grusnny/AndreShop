import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
export default class MenuInvertedSecondary extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClick(e,{name}){
            console.log(name);
            if (name == "home") {
                window.location.href = "/home";
            }
            if (name == "busqueda") {
                window.location.href = "/busqueda";

            }if (name  == "productos") {
                window.location.href = "/";

            }
            else {
                console.log("estoy aqui");
            }
    }
    

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            onClick={this.handleClick}

          />
          <Menu.Item
            name='busqueda'
            active={activeItem === 'busqueda'}
            onClick={this.handleItemClick}
            onClick={this.handleClick}

          />
          <Menu.Item
            name='productos'
            active={activeItem === 'productos'}
            onClick={this.handleItemClick}
            onClick={this.handleClick}

          />
        </Menu>

      </Segment>
    )
  }
}