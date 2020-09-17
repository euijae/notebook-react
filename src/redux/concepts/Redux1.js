import React from 'react'
import '../../styles.css'

const Redux1 = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux2.png')} alt="" className="ui large centered image" />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol class="ui list">
          <li>
            Redux is a tool for managing both data and UI state.
          </li>
          <li>
            Redux offers a solution of storing all your application state in one place, called a “store”. Components then “dispatch” state changes to the store, not directly to other components. Then the components that need to be aware of state changes can “subscribe” to the store.
          </li>
          <li>
            The store can be thought of as a “middleman” for all state changes in the application. With Redux involved, components don’t communicate directly between each other, but rather all state changes must go through the single source of truth, the store.
          </li>
          <li>
            With Redux, every components gets their state from the store. The components should send their state changes to the store.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Redux1;
