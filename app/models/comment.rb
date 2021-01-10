class Comment < ApplicationRecord
  validates :text, presence: true,\
                   length:{ maximum: 150,\
                   message: 'コメントはは最大で150文字です' }

  belongs_to :article
  belongs_to :user

  has_closure_tree
end
