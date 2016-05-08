var _todos = [],
    _callbacks = [];

var TodoStore = {
  all: function () {
    return _todos;
  },
  fetch: function () {
    $.ajax({
      type: 'GET',
      url: '/api/todos',
      success: function(todos) {
        _todos = todos;
        TodoStore.changed();
      }
    });
  },
  create: function(todo) {
    $.ajax({
      type: 'POST',
      url: '/api/todos',
      data: { todo: todo },
      success: function (newTodo) {
        _todos.push(newTodo);
        TodoStore.changed();
      }
    });
  },
  destroy: function(id) {
    // check that todo exists before making delete request
    this.found = false;
    _todos.forEach(function(todo, idx) {
      if (todo.id == id) {
        this.found = true;
        return;
      }
    }.bind(this));

    if (!this.found) {
      console.log('not found');
      return;
    }

    $.ajax({
      type: 'DELETE',
      url: '/api/todos/' + id,
      success: function (deletedTodo) {
        this.deletedTodo = deletedTodo;
        _todos.forEach(function(todo, idx) {
          if (todo.id == this.deletedTodo.id) {
            _todos.splice(idx, 1);
            return;
          }
        }.bind(this));
        TodoStore.changed();
      }
    });
  },
  toggleDone: function(id) {
    $.ajax({
      type: 'PATCH',
      url: '/api/todos/' + id,
      success: function (updatedTodo) {
        _todos.forEach(function(todo, idx) {
          if (todo.id == updatedTodo.id) {
            _todos[idx] = updatedTodo;
            return;
          }
        });
        TodoStore.changed();
      }
    });
  },
  addChangedHandler: function(callback) {
    _callbacks.push(callback);
  },
  removeChangedHandler: function(callback) {
    var idxOfCallback = _callbacks.indexOf(callback);
    _callbacks.splice(indexOfCallback, 1);
  },
  changed: function () {
    _callbacks.forEach(function(callback) {
      callback();
    });
  }
};

module.exports = TodoStore;
