class Article < ApplicationRecord

  validates :title,   presence: { message: 'タイトルの入力は必須です' }
  validates :text,    presence: { message: '本文の入力は必須です' }
  validates :summary, length:{ maximum: 100,\
                               message: '概要は最大で100文字です' }

  belongs_to :user
  has_many :comments

end