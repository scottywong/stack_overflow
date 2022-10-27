from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import db, Answer, Comment, Vote
from app.forms import AnswerForm, CommentForm
from app.api.auth_routes import validation_errors_to_error_messages

answer_routes = Blueprint('answers', __name__)


@answer_routes.route('/<int:answerId>/comments', methods=['POST'])
@login_required
def create_comment(answerId):
    """
    Create a new comment on an answer by answerId
    """
    answer = Answer.query.get(answerId)
    if answer is None:
        return {"errors": ["can't find this answer, bully!"]}, 404

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            userId=current_user.id,
            answerId=answerId,
            body=form.data['body']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@answer_routes.route('/<int:answerId>', methods=['PUT'])
@login_required
def update_answer(answerId):
    """
    Update an answer by answerId
    """
    answer = Answer.query.get(answerId)
    if answer is None:
        return {"errors": ["can't find this answer, bully!"]}, 404

    if answer.userId != current_user.id:
        return {"errors": ["ain't your answer, bully!"]}, 401

    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        answer.body = form.data['body']
        db.session.commit()
        return answer.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@answer_routes.route('/<int:answerId>', methods=['DELETE'])
@login_required
def delete_answer(answerId):
    """
    Delete an answer by answerId
    """
    answer = Answer.query.get(answerId)
    if answer is None:
        return {"errors": ["can't find this answer, bully!"]}, 404

    if answer.userId != current_user.id:
        return {"errors": ["ain't your answer, bully!"]}, 401

    db.session.delete(answer)
    db.session.commit()

    return {"Message": "you deleted an answer, you go bully!"}, 200


@answer_routes.route('/<int:answerId/votes>', methods=['POST'])
@login_required
def create_vote(answerId):
    """
    Upvote or Downvote an answer based on answerId
    """
    answer = Answer.query.get(answerId)
    if answer is None:
        return {"errors": ["can't find this answer, bully!"]}, 404

    if answer.userId == current_user.id:
        return {"errors": ["can't vote on your own answer, bully!"]}, 401

    form = VoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_vote = Vote(
            userId=current_user.id,
            answerId=answerId,
            voteDirection=form.data['voteDirection']
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
