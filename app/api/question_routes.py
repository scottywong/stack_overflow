from flask import Blueprint, jsonify, session, request
from app.models import User, db, Question, Answer, Comment, Vote
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

question_routes = Blueprint('question', __name__)

@question_routes.route('/')
def allQuestions():
    questions = Question.query.all()
    return {'Questions': [question.to_dict() for question in questions]}

@question_routes.route('/<int:id>')
@login_required
def questionDetail(id):
    question = Question.query.get(id)
    return {'Question': question.to_dict2()}  
