import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Redux1 = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux2.svg')}  class="ui large centered image" />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            Redux is a tool for managing both data and UI state.
          </li>
          <li role="listitem" class="listitem">
            Redux offers a solution of storing all your application state in one place, called a “store”. Components then “dispatch” state changes to the store, not directly to other components. Then the components that need to be aware of state changes can “subscribe” to the store.
          </li>
          <li role="listitem" class="listitem">
            The store can be thought of as a “middleman” for all state changes in the application. With Redux involved, components don’t communicate directly between each other, but rather all state changes must go through the single source of truth, the store. This is much different from other strategies where parts of the application communicate directly between each other.
          </li>
          <li role="listitem" class="listitem">
            With Redux, it’s clear that all components get their state from the store. It’s also clear where components should send their state changes – also the store. The component initiating the change is only concerned with dispatching the change to the store and doesn’t have to worry about a list of other components that need the state change. This is how Redux makes data flow easier to reason about.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Redux1;
