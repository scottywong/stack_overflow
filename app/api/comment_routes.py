from flask import Blueprint, jsonify, request
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
        return jsonify({
            "message": "Comment not found",
            "status_code": 404,
        }), 404

    if comment.userId != current_user.id:
        return jsonify({
            "message": "Cannot delete comment",
            "status_code": 401
        }), 401

    db.session.delete(comment)
    db.session.commit()

    return jsonify({
        "message": "Comment deleted successfully",
        "status_code": 200,
    }), 200
