import React from 'react';
import { connect } from "react-redux";

import Menu from './components/Menu';
import ContentIndex from './components/contents-index/ContentIndex';
import './styles.css';

const styles = {
  notebookColumn: {
    height: '100vh',
    overflow: 'auto'
  },
  notebookGrid: {
    margin: '0 auto'
  }
};

const {notebookGrid, notebookColumn} = styles;

class Notebook extends React.Component {
  //
  render() {
    return (
      <div class="ui grid fluid notebookGrid" style={notebookGrid}>
        <div class="three wide column black" style={notebookColumn}>
          <Menu />
        </div>
        <div class="nine wide column" style={notebookColumn}>
        </div>
        <div class="four wide column" style={{
          ...notebookColumn,
          borderLeft: '1px solid #dfdfdf',
          backgroundColor: '#fafafa',
          padding: '100px 40px'
        }}>
          <ContentIndex />
        </div>
      </div>
    );
  }
}

export default Notebook;
