import React from 'react'
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
        <ol class="ui list">
          <li class="listitem">
            Redux uses just one store, we’ll need to use nested objects to organize state into different sections. In order to create a store with nested objects, we’ll need to define each section with a reducer.
          </li>
          <li class="listitem">
            Reducers are also called each time actions are dispatched. Since the returned state from a reducer will become our new state in the store, Redux always expects reducers to return state.
          </li>
          <li class="listitem">
            It’s easy to think of reducers as funnels that allow state to pass through them. This is because reducers always receive the return state to update the store.
          </li>
          <li class="listitem">
            Which reducer is called after a dispatch?
            <ol>
              <li class="listitem">
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
