class CommentsController < ApplicationController
  def create
    @article = Article.find(params[:article_id])

    if params[:comment][:parent_id].to_i > 0
      parent = Comment.find_by_id(params[:comment].delete(:parent_id))
      @comment = parent.children.build(comment_params)
    else
      @comment = Comment.new(comment_params)
    end

    if @comment.save
      redirect_to article_path(@article.id)
    else
      render 'articles/show'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, article_id: @article.id)
  end

end
