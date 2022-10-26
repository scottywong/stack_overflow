from flask import Blueprint, jsonify, session, request
from app.models import User, db, Question, Answer, Comment, Vote
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms import QuestionForm
from flask_login import current_user, login_user, logout_user, login_required

question_routes = Blueprint('question', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@question_routes.route('/')
def allQuestions():
    questions = Question.query.all()
    return {'Questions': [question.to_dict() for question in questions]}

@question_routes.route('/<int:id>')
@login_required
def questionDetail(id):
    question = Question.query.get(id)
    return {'Question': question.to_dict2()}  

@question_routes.route('/', methods=['POST'])
@login_required
def createQuestion():
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        question = Question(
            userId=current_user.id,
            title=form.data['title'],
            body=form.data['body']
        )
        db.session.add(question)
        db.session.commit()
        print(question.to_dict)
        return question.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@question_routes.route('/<int:id>', methods=['PUT'])
@login_required
def editQuestion(id):
    if id != current_user.id:
        return {'Message': "aint your question, you bully!"}
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        question = Question(
            userId=current_user.id,
            title=form.data['title'],
            body=form.data['body']
        )
        db.session.add(question)
        db.session.commit()
        print(question.to_dict)
        return question.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@question_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteQuestion(id):
    if id != current_user.id:
        return {'Message': "aint your question, you bully!"}
    DQuestion = Question.query.get(id)
    db.session.delete(DQuestion)
    db.session.commit()
    return {'Message': "you deleted a question, you bully!"}