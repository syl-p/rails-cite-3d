module Commentable
  extend ActiveSupport::Concern

  def create
    @comment = @commentable.comments.new(comment_params)
    @comment.user = Current.user
    if @comment.save
      redirect_to @commentable, notice: 'Your comment was successfully created.'
    else
      redirect_to request.referrer, inertia: { errors: @commentable.errors }
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end
