import React from 'react';
import Divider from './Divider';
import Footer from './Footer';

import '../styles.css'
import menu from '../seed/menu';

// <img src={require('../image/download.png')} alt="" className="ui image avatar rounded left floated" />
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu
    }
  }

  menuTitleGenerator(menuItems) {
    const { title } = menuItems;
    return (
      <>
        <h1 className="ui left floated header">{title}</h1>
        <Divider />
      </>
    );
  }

  menuListGenerator(menuItems) {
    const { sections } = menuItems;
    return sections.map(section => (
      <div className="ui link list inverted">
        {titleCreator(section)}
        {contentsCreator(section)}
        <Divider />
      </div>
    ));

    function titleCreator(section) {
      const {title, clickable} = section.header;

      if(clickable) {
        return (<a className="ui header item" style={{color: 'white'}}>{title}</a>)
      } else {
        return (<div className="ui header item" style={{color: 'white'}}>{title}</div>)
      }
    }

    function contentsCreator(section) {
      const {contents} = section;
      return (contents || []).map(content => (
        <a className="item">{content.title}</a>
      ));
    }
  }

  render() {
    return (
      <div>
        <div className="ui inverted segment">
          {this.menuTitleGenerator(this.state.menu)}
          {this.menuListGenerator(this.state.menu)}
          <Footer />
        </div>
      </div>
    );
  };
}

export default Menu;
