import React from 'react'
import '../../styles.css'

const Problem = () => (
  <div class="ui grid">
    <div class="row">
      <div class="sixteen wide column">
        <img src={require('../../image/redux3.png')} alt="" className="ui large centered image"  />
      </div>
    </div>
    <div class="row">
      <div class="two wide column"></div>
      <div class="twelve wide column">
        <ol class="ui list">
          <li class="listitem">
            According to React docs,
            <blockquote><p>For communication between two components that don’t have a parent-child relationship, you can set up your own global event system. Flux pattern is one of the possible ways to arrange this.</p></blockquote>
          </li>
          <li class="listitem">
            Flux is a pattern not a tool like Redux. But Redux is a tool which was inspired by the Flux pattern.
          </li>
          <li class="listitem">
            The differences between Flux and Redux are  (1) Flux includes multiple Stores per app, but Redux includes a single Store per app. (2) Rather than placing state information in multiple Stores across the application, Redux keeps everything in one region of the app.
          </li>
        </ol>
      </div>
      <div class="two wide column"></div>
    </div>
  </div>
)

export default Problem;
