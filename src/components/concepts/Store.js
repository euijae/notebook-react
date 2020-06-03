import React from 'react'
import '../../styles.css'

const Store = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column"></div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol class="ui list">
          <li class="listitem">
            To start, create a store with Redux.createStore() and pass all reducers in as arguments.
            <iframe title="store-1" width="100%" height="300" src="//jsfiddle.net/euijae_kim/pLno3qvg/2/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
            <ol>
              <li class="listitem">
                The store is created with one reducer.
              </li>
              <li class="listitem">
                The reducer adds the new todo list to the state and returns it, which updates store.
              </li>
            </ol>
          </li>
          <li class="listitem">
            When the store is created, Redux immediately calls the reducers and uses their return values as initial state. This first call to the reducer sends undefined for the state.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Store;
