import React, {Component} from 'react';

class ContentIndex extends Component {
  render() {
    return(
      <ol class="ui list">
        <li>Signing Up</li>
        <li>User Benefits</li>
        <li>User Types
          <ol>
            <li>Admin</li>
            <li>Power User</li>
            <li>Regular User</li>
          </ol>
        </li>
        <li>Deleting Your Account</li>
      </ol>
    );
  }
}

export default ContentIndex;
