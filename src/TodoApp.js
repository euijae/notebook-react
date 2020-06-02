import React from "react";
import Demo from './components/Demo';
import Concept from './components/Concept';
import { Menu } from 'semantic-ui-react'

export default class TodoApp extends React.Component {
  state = { activeItem: 'concept' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  showMenu() {
    const { activeItem } = this.state;

    return (
      <Menu borderless size='large'>
        <Menu.Item>
          <img src={require('./image/download.png')} alt="" className="ui avatar image" />
        </Menu.Item>

        <Menu.Item
          name='concept'
          active={activeItem === 'concept'}
          onClick={this.handleItemClick}
        >
          Concept
        </Menu.Item>

        <Menu.Item
          name='demo'
          active={activeItem === 'demo'}
          onClick={this.handleItemClick}
        >
          Demo
        </Menu.Item>
      </Menu>
    )
  }

  render() {
    return (
      <div>
        {this.showMenu()}
        <div class="todo-app ui vertically divided grid">
          {this.state.activeItem === 'demo' ? <Demo /> : <Concept />}
        </div>
      </div>
    );
  }
}
