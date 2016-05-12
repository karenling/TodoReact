var React = require('react');
var TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      body: '',
      done: false
    }
  },
  updateTitle: function(e) {
    this.setState({ title: e.target.value })
  },
  updateBody: function(e) {
    this.setState({ body: e.target.value })
  },
  handleSubmit: function(e) {
    TodoStore.create( this.state )
    this.setState( this.getInitialState() )
  },
  render: function() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' placeholder='Title' onChange={ this.updateTitle } value={ this.state.title }></input>
          <input type='text' placeholder='Body' onChange={ this.updateBody } value={ this.state.body }></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
})

module.exports = TodoForm;
