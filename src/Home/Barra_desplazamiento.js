import React, { Component } from 'react'
import { Menu, MenuHeader, Segment } from 'semantic-ui-react'
export default class MenuInvertedSecondary extends Component {
  state = { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name },this.handleClick(name))

  handleClick(name){
            console.log(name);
            if (name == 'home') {
                window.location.href = "/home";
            }
            else if(name == 'busqueda') {
                window.location.href = "/busqueda";

            }else if(name  == 'productos') {
                window.location.href = "/";

            }
            else {
              window.location.href = "/error";
            }
    }
    

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='AndresShop'
          />
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}

          />
          <Menu.Item
            name='busqueda'
            active={activeItem === 'busqueda'}
            onClick={this.handleItemClick}

          />
          <Menu.Item
            name='productos'
            active={activeItem === 'productos'}
            onClick={this.handleItemClick}

          />

        </Menu>

      </Segment>
    )
  }
}