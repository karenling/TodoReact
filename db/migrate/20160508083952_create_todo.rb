class CreateTodo < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.text :body
      t.boolean :done
    end
  end
end
