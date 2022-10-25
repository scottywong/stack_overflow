from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Question, Answer

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/questions')
@login_required
def myQuestions():
    questions = Question.query.filter(Question.userId==current_user.id).all()
    return {'Questions': [question.to_dict() for question in questions]}

@user_routes.route('/answers')
@login_required
def myAnswers():
    answers = Answer.query.filter(Answer.userId==current_user.id).all()
    return {'Answers': [answer.to_dict() for answer in answers]}
