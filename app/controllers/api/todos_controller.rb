class Api::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    todo = Todo.create!(todo_params)
    render json: todo
  end

  def update
    todo = Todo.find(params[:id])
    todo.update(done: !todo.done)
    render json: todo
  end

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy!
    render json: todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
