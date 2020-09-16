import React from 'react';
import Divider from './Divider';
import Footer from './Footer';

// <img src={require('../image/download.png')} alt="" className="ui image avatar rounded left floated" />
class Menu extends React.Component {
  render() {
    return (
      <div>
        <div class="ui inverted segment">
          <h1 class="ui left floated header">Notebook</h1>
          <Divider />
          <div class="ui link list inverted">
            <a class="ui header item" style={{color: 'white'}}>What's new</a>
          </div>
          <Divider />
          <div class="ui link list inverted">
            <a class="ui header item" style={{color: 'white'}}>Status Planning</a>
          </div>
          <Divider />
          <div class="ui link list inverted">
            <div class="ui header item" style={{color: 'white'}}>Language</div>
            <a class="active item" style={{borderRight: '5px solid #134A8E'}}>Redux</a>
            <a class="item">Python</a>
          </div>
          <Divider />
          <div class="ui link list inverted">
            <div class="ui header item" style={{color: 'white'}}>Application</div>
            <a class="item">Autocomplete</a>
            <a class="item">Spell Checker</a>
            <a class="item">Image Processing</a>
            <a class="item">Voice Recognition</a>
          </div>
          <Divider />
          <div class="ui link list inverted">
            <div class="ui header item" style={{color: 'white'}}>Mathematics</div>
            <a class="item">Combinatorics</a>
            <a class="item">Number Theory</a>
          </div>
          <Divider />
          <Footer />
        </div>
      </div>
    );
  };
}

export default Menu;
