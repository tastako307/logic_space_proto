class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  validates :email,              uniqueness: { message: '指定したメールアドレスは既に登録されています' }
  validates :password,           format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i, \
                                           message: 'パスワードには最低でもアルファベットと数字を一文字づつ含めてください' }
  has_many :articles
  has_many :comments
end
