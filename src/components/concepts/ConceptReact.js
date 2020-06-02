import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const ConceptReact = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux3.png')} alt="" className="ui large centered image"  />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            Unidirectional data flow
          </li>
          <li role="listitem" class="listitem">
            Data flows in one direction from parent to child.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default ConceptReact;
