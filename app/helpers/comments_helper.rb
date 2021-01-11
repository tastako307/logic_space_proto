module CommentsHelper
  def comments_tree_for(comments)
    comments.map do |comment, nested_comments|
      render(comment) +
          (nested_comments.size > 0 ? content_tag(:div, comments_tree_for(nested_comments), class: "replies") : nil)
    end.join.html_safe
  end
#   def root_comment(comment)
#     content_tag(:div,
#                  content_tag(:div,content_tag,),)
#                  class:"root-comment")
#     if comment.branch.presence
#       (comment.branch.comment).each do |bc|
#         branch_comment(bc)  
#       end
#     end
#   end

#   def comment_resource(comment)
#     content_tag(:div,, class:"")
#     content_tag(:div,,)
#   end

#   def branch_comment(comment)
#     content_tag(:div, comment.user.name, class:"")
#     content_tag(:div, comment.text, class:"branch-comment")
#     if comment.branch.presence
#       (comment.branch.comment).each do |bc|
#         branch_comment(bc)  
#       end
#     end
#   end
end
