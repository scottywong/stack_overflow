from flask import Blueprint
from flask_login import login_required, current_user

from app.models import db, Comment
from app.forms import CommentForm
from app.api.auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_answer(commentId):
    """
    Delete a comment by commentId
    """
    comment = Comment.query.get(commentId)
    if comment is None:
        return {"errors": ["can't find this comment, bully!"]}, 404

    if comment.userId != current_user.id:
        return {"errors": ["ain't your comment, bully!"]}, 401

    db.session.delete(comment)
    db.session.commit()

    return {"Message": "you deleted a comment, you go bully!"}, 200
