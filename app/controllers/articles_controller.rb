class ArticlesController < ApplicationController
  before_action :authenticate_user!, only:[:new, :create]
  def index
    @articles = Article.all.includes(:user)
  end

  def new
    @article = Article.new
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to root_path #ユーザーページ実装後自分のユーザーページにジャンプするように変更する予定
    else
      render :new
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
     redirect_to article_path(@article.id)
    else
     render :edit
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to root_path
  end

  private

  def article_params
    params.require(:article).permit(:title, :summary, :text).merge(user_id: current_user.id)
  end

end
