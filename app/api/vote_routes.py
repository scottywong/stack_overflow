from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user

from app.models import db, Vote
from app.forms import VoteForm
from app.api.auth_routes import validation_errors_to_error_messages

vote_routes = Blueprint('votes', __name__)

@vote_routes.route('/<int:voteId>', methods=['DELETE'])
@login_required
def delete_vote(voteId):
    """
    Delete a vote by voteId
    """
    vote = Vote.query.get(voteId)
    if vote is None:
        return {"errors": ["can't find this vote, bully!"]}, 404

    if vote.userId != current_user.id:
        return {"errors": ["ain't your vote, bully!"]}, 401

    db.session.delete(vote)
    db.session.commit()

    return {"Message": "you deleted a vote, you go bully!"}, 200
