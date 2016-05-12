var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoForm = require('../components/todo_form');

var TodoListItem = React.createClass({
  render: function() {
    return(
      <div>
        <div><b>{ this.props.todo.title }</b></div>
        <div>{ this.props.todo.body }</div>
      </div>
    )
  }
});

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
        <TodoForm></TodoForm>
        { this.state.todos.map(function(todo, idx) {
          return( <TodoListItem key={ todo.id } todo={ todo }/> )
        }.bind(this))}
      </div>
    )
  }
});

module.exports = TodoList;
