import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Dispatch = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux2.svg')} class="ui large centered image"  />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            Events should be passed down from container to presentational components.
          </li>
          <li role="listitem" class="listitem">
            It turns out react-redux helps with that too in cases where an event simply needs to dispatch an action.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Dispatch;
