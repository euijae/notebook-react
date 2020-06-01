import React from 'react';
import { connect } from "react-redux";

class StoreLog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoLists = this.props.lists;
    return (
      <div class="ui celled grid">
        <div class="row">
          <div class="sixteen wide column">
            <table class="ui very basic table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Content</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.ids.length === 0 ? 'No todos, yay!' :
                  this.props.ids.map(id => (
                      <tr>
                        <td>{id}</td>
                        <td>{todoLists[id].content}</td>
                        <td>{todoLists[id].completed ? 'Completed' : 'Incomplete'}</td>
                      </tr>
                  ))
                }
              </tbody>
            </table>
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
