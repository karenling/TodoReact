var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todo_list');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TodoList />, document.getElementById('root'));
});
