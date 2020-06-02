import React from 'react';
import { connect } from "react-redux";
import '../styles.css';

class StoreLog extends React.Component {
  render() {
    return (
      <div class="ui celled grid">
        <div class="row">
          <div class="sixteen wide column store-tracker">
            {JSON.stringify(this.props.lists, null, 4)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    ids: store.todos.allIds,
    lists : store.todos.byIds,
  }
}

export default connect(mapStateToProps)(StoreLog);
