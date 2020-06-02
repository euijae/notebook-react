import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Reducer = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux4.png')} alt="" className="ui large centered image"  />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            Redux uses just one store, we’ll need to use nested objects to organize state into different sections. In order to create a store with nested objects, we’ll need to define each section with a reducer.
          </li>
          <li role="listitem" class="listitem">
            The use of combineReducers() allows us to describe our store in terms of different logical sections and assign reducers to each section. Now, when each reducer returns initial state, that state will go into its respective section of the store (e.g, userState or widgetState).
          </li>
          <li role="listitem" class="listitem">
            Each reducer gets passed its respective subsection of the overall state, not the whole store’s worth of state like with one-reducer example. Then the state returned from each reducer applies to its subsection.
          </li>
          <li role="listitem" class="listitem">
            Which reducer is called after a dispatch?
            <ol>
              <li role="listitem" class="listitem">
                All of them. Comparing reducers to funnels is even more apparent when we consider that each time an action is dispatched, all reducers will be called and will have an opportunity to update their respective state.
              </li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Reducer;
