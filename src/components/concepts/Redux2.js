import React from 'react'
import '../../styles.css';

const Redux2 = () => (
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
            Single Source of Truth
            <ol>
              <li>
                Redux uses only one store for all its application state.
              </li>
              <li>
                Since all state resides in one place, Redux calls this the single source of truth.
              </li>
              <li>
                The data structure of the store is ultimately up to you, but it’s typically a deeply nested object for a real application.
              </li>
            </ol>
          </li>
          <li>
            State is Read-Only
            <ol>
              <li>
                According to Redux docs, <blockquote><p>The only way to mutate the state is to emit an action and object describing what happened.</p></blockquote> Meaning that the application can’t modify the state directly. Instead, “actions” are dispatched to express an intent to change the state in the store.
              </li>
              <li>
                Dispatching an action is the only way for the application code to express a state change.
                <div>
                  <iframe title="redux2-1" width="100%" height="200" src="//jsfiddle.net/euijae_kim/jsfkx5yz/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                </div>
                <ol>
                  <li>
                    &emsp; The dispatch() method sends an action object to Redux.
                  </li>
                  <li>
                    &emsp; The action can be described as a “payload” that carries a type and all other data that could be used to update the state – todo item in this case.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            Changes are made with Pure Functions
            <ol>
              <li>
                Redux doesn’t allow the application to make direct changes to the state. Instead, the dispatched action describes the state change and an intent to change state.
              </li>
              <li>
                Reducers are functions that you write which handle dispatched actions and can actually change the state.
              </li>
              <li>
                A reducer takes in current state as an argument and can only modify the state by returning new state. Its arguments should be considered “immutable”, meaning they shouldn’t be changed.
                <iframe title="redux2-2" width="100%" height="300" src="//jsfiddle.net/euijae_kim/pLno3qvg/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Redux2;
