class CreateCommentRels < ActiveRecord::Migration[6.0]
  def change
    create_table :comment_rels do |t|

      t.timestamps
    end
  end
end
