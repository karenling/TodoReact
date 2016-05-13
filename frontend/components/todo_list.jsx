var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoForm = require('../components/todo_form');

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
        <input type='submit' onClick={ this.handleDone } value='Undo'></input>
      )
    } else {
      return(
        <input type='submit' onClick={ this.handleDone } value='Done'></input>
      )
    }
  }
});

var TodoListItem = React.createClass({
  handleDestroy: function(e) {
    TodoStore.destroy(this.props.todo.id)
  },
  render: function() {
    return(
      <div>
        <div><b>{ this.props.todo.title }</b></div>
        <div>{ this.props.todo.body }</div>
        <DoneButton todo={ this.props.todo }></DoneButton>
        <input type='submit' value='Delete' onClick={ this.handleDestroy }></input>
        <br /><br />
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
