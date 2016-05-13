var React = require('react');
var TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  getInitialState: function() {
    return {
      done: this.props.todo.done
    }
  },
  handleDone: function(e) {
    e.preventDefault();
    TodoStore.toggleDone(this.props.todo.id);
    this.setState({ done: !this.state.done })
  },
  render: function() {
    if (this.state.done) {
      return(
        <input type='submit' onClick={ this.handleDone } value='Undo' className='btn btn-danger'></input>
      )
    } else {
      return(
        <input type='submit' onClick={ this.handleDone } value='Done' className='btn btn-success'></input>
      )
    }
  }
});

module.exports = DoneButton;
