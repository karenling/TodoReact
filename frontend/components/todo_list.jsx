var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      todos: TodoStore.all()
    }
  },
  todosChanged: function() {
    this.setState({ todos: TodoStore.all() })
  },
  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  render: function() {
    return(
      <div>
        <ul>
          { this.state.todos.map(function(todo, idx) {
            return( <li key={ todo.id }>{ todo.title }</li> )
          }.bind(this))}
        </ul>
      </div>
    )
  }
});

module.exports = TodoList;
