import React from 'react';

import Menu from './components/Menu';
import ContentIndex from './components/contents-index/ContentIndex';
import './styles.css';

const axios = require('axios');

axios.get('https://jellybelly-apigateway.herokuapp.com/api/v1/resources/books/all')
  .then(res => {
    console.log(res);
  })

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
      <div className="ui grid fluid notebookGrid" style={notebookGrid}>
        <div className="three wide column black" style={notebookColumn}>
          <Menu />
        </div>
        <div className="nine wide column" style={notebookColumn}>
        </div>
        <div className="four wide column" style={{
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
