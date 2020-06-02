import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import '../../styles.css';

const Problem = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column"></div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol role="list" class="ui list">
          <li role="listitem" class="listitem">
            It is not recommended to reach out to component (which is not in parent-child relationship) directly. <b>This is where Redux comes in handy.</b>
          </li>
          <li role="listitem" class="listitem">
            Quote ...
            <blockquote><p>For communication between two components that don’t have a parent-child relationship, you can set up your own global event system. Flux pattern is one of the possible ways to arrange this.”</p></blockquote>
          </li>
          <li role="listitem" class="listitem">
            Flux is a pattern not a tool like Redux. But Redux is a tool which was inspired by the Flux pattern.
          </li>
          <li role="listitem" class="listitem">
            The primary difference of Flux vs Redux is that Flux includes multiple Stores per app, but Redux includes a single Store per app. Rather than placing state information in multiple Stores across the application, Redux keeps everything in one region of the app.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Problem;
