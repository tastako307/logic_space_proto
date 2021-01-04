module CommentsHelper
  def root_comment(comment)
    content_tag(:div,
                 content_tag(:div,content_tag,),)
                 class:"root-comment")
    if comment.branch.presence
      (comment.branch.comment).each do |bc|
        branch_comment(bc)  
      end
    end
  end

  def comment_resource(comment)
    content_tag(:div,, class:"")
    content_tag(:div,,)
  end

  def branch_comment(comment)
    content_tag(:div, comment.user.name, class:"")
    content_tag(:div, comment.text, class:"branch-comment")
    if comment.branch.presence
      (comment.branch.comment).each do |bc|
        branch_comment(bc)  
      end
    end
  end
end
