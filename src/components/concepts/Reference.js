import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Reference = () => (
  <div class="ui grid">
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            <a href="https://redux.js.org/" target="_blank">Redux</a>
          </li>
          <li role="listitem" class="listitem">
            <a href="https://css-tricks.com/learning-react-redux" target="_blank">CSS-Tricks</a>
          </li>
          <li role="listitem" class="listitem">
            and my memories...
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Reference;
