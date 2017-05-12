import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuComponent extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='Menu'>
        <Menu.Item header className='Base-style'>Eurovision analytics Page </Menu.Item >
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} className='Base-style' />
        <Menu.Item name='results' active={activeItem === 'results'} onClick={this.handleItemClick} className='Base-style' />
      </Menu>
    )
  }
}

export default MenuComponent;