import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Store = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column"></div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            To start, create a store with Redux.createStore() and pass all reducers in as arguments.
            <iframe width="100%" height="300" src="//jsfiddle.net/euijae_kim/pLno3qvg/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
            <ol>
              <li role="listitem" class="listitem">
                The store is created with one reducer.
              </li>
              <li role="listitem" class="listitem">
                The reducer establishes that the initial state of the application is an empty array.
              </li>
              <li role="listitem" class="listitem">
                A dispatch is made with a new user in the action itself.
              </li>
              <li role="listitem" class="listitem">
                The reducer adds the new user to the state and returns it, which updates store.
              </li>
            </ol>
          </li>
          <li role="listitem" class="listitem">
            When the store is created, Redux immediately calls the reducers and uses their return values as initial state. This first call to the reducer sends undefined for the state. The reducer code anticipates this and returns an empty array to start the initial state of the store.
          </li>
          <li role="listitem" class="listitem">
            Reducers are also called each time actions are dispatched. Since the returned state from a reducer will become our new state in the store, Redux always expects reducers to return state.
          </li>
          <li role="listitem" class="listitem">
            A dispatched action describes an intent to change state, and often times carries the data for the new state. Redux passes the current state along with the action object to the reducer.
          </li>
          <li role="listitem" class="listitem">
            It’s easy to think of reducers as funnels that allow state to pass through them. This is because reducers always receive the return state to update the store.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Store;
