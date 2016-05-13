var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoDetailView = React.createClass({
  handleDestroy: function(e) {
    TodoStore.destroy(this.props.todo.id)
  },
  render: function() {
    return(
      <div>
        <div>{ this.props.todo.body }</div>
        <input type='submit' value='Delete' onClick={ this.handleDestroy } className='btn btn-danger'></input>
      </div>
    )
  }
});

module.exports = TodoDetailView;
