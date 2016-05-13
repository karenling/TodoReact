var React = require('react');
var DoneButton = require('./done_button');
var TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function() {
    return{
      showDetails: false
    }
  },
  showDetails: function() {
    this.setState({ showDetails: !this.state.showDetails })
  },
  render: function() {
    return(
      <div>
        <div onClick={ this.showDetails }><b>{ this.props.todo.title }</b></div>
        <DoneButton todo={ this.props.todo }></DoneButton>
        {this.state.showDetails ? <TodoDetailView todo={ this.props.todo }></TodoDetailView> : null }
        <br /><br />
      </div>
    )

  }
});

module.exports = TodoListItem;
