var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoForm = require('./todo_form');
var TodoListItem = require('./todo_list_item');

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
      <div className='col-xs-4 col-xs-offset-4'>
        { this.state.todos.map(function(todo, idx) {
          return( <TodoListItem key={ todo.id } todo={ todo }/> )
        }.bind(this))}
        <TodoForm></TodoForm>
      </div>
    )
  }
});

module.exports = TodoList;
