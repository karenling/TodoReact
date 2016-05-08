class Todo < ActiveRecord::Base
  validates :done, inclusion: { in: [true, false] }
end
