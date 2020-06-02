import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Redux2 = () => (
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
            Single Source of Truth
            <ol class="">
              <li role="listitem">
                Redux uses only one store for all its application state.
              </li>
              <li role="listitem">
                Since all state resides in one place, Redux calls this the single source of truth.
              </li>
              <li role="listitem">
                The data structure of the store is ultimately up to you, but it’s typically a deeply nested object for a real application.
              </li>
              <li role="listitem">
                This one-store approach of Redux is one of the primary differences between it and Flux’s multiple store approach.
              </li>
            </ol>
          </li>
          <li role="listitem" class="listitem">
            State is Read-Only
            <ol>
              <li role="listitem" class="listitem">
                According to Redux docs, “The only way to mutate the state is to emit an action, an object describing what happened.” Meaning that the application can’t modify the state directly. Instead, “actions” are dispatched to express an intent to change the state in the store.
              </li>
              <li role="listitem" class="listitem">
                Dispatching an action is the only way for the application code to express a state change.
                <div>
                  <iframe width="100%" height="200" src="//jsfiddle.net/euijae_kim/jsfkx5yz/4/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                </div>
                <ol>
                  <li role="listitem" class="listitem">
                    &emsp; The dispatch() method sends an action object to Redux.
                  </li>
                  <li role="listitem" class="listitem">
                    &emsp; The action can be described as a “payload” that carries a type and all other data that could be used to update the state – an user in this case.
                  </li>
                  <li role="listitem" class="listitem">
                    &emsp; Keep in mind that after the type property, the design of an action object is up to you.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li role="listitem" class="listitem">
            Changes are made with Pure Functions
            <ol>
              <li role="listitem" class="listitem">
                Redux doesn’t allow the application to make direct changes to the state. Instead, the dispatched action describes the state change and an intent to change state.
              </li>
              <li role="listitem" class="listitem">
                Reducers are functions that you write which handle dispatched actions and can actually change the state.
              </li>
              <li role="listitem" class="listitem">
                A reducer takes in current state as an argument and can only modify the state by returning new state:
                <iframe width="100%" height="150" src="//jsfiddle.net/euijae_kim/3ozbw0g9/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
              </li>
              <li role="listitem" class="listitem">
                Reducer has following characteristics:
                <ol>
                  <li role="listitem" class="listitem">
                    &emsp; It doesn’t make outside network or database calls.
                  </li>
                  <li role="listitem" class="listitem">
                    &emsp; Its return value depends solely on the values of its parameters.
                  </li>
                  <li role="listitem" class="listitem">
                    &emsp; Its arguments should be considered “immutable”, meaning they shouldn’t be changed.
                  </li>
                  <li role="listitem" class="listitem">
                    &emsp; Calling a pure function with the same set of arguments will always return the same value.
                  </li>
                </ol>
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
