from flask import Blueprint, jsonify, session, request
from app.models import User, db, Question, Answer, Comment, Vote
from app.forms import LoginForm
from app.forms import SignUpForm
from app.forms import QuestionForm
from app.forms import AnswerForm
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
    return {'Questions': [question.to_dict() for question in questions]}, 200

@question_routes.route('/<int:id>')
@login_required
def questionDetail(id):
    question = Question.query.get(id)
    return {'Question': question.to_dict2()}, 200  

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
        return question.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@question_routes.route('/<int:id>', methods=['PUT'])
@login_required
def editQuestion(id):
    question = Question.query.get(id)
    if question is None:
        return {'errors': ["cant find this question, bully!"]}, 404
    if question.userId != current_user.id:
        return {'errors': ["aint your question, bully!"]}, 401
    form = QuestionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        question.title=form.data['title']
        question.body=form.data['body']
        db.session.commit()
        return question.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@question_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def deleteQuestion(id):
    question = Question.query.get(id)
    if question is None:
        return {'errors': ["cant find this question, bully!"]}, 404
    if question.userId != current_user.id:
        return {'errors': ["aint your question, bully!"]}, 401
    db.session.delete(question)
    db.session.commit()
    return {'Message': "you deleted a question, you go bully!"}, 200

@question_routes.route('/<int:id>/answers', methods=['POST'])
@login_required
def createAnswer(id):
    question = Question.query.get(id)
    if question is None:
        return {'errors': ["cant find this question, bully!"]}, 404
    if question.userId == current_user.id:
        return {'errors': ["cant answer your own question, bully!"]}, 401
    form = AnswerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        answer = Answer(
            userId=current_user.id,
            questionId=id,
            body=form.data['body']
        )
        db.session.add(answer)
        db.session.commit()
        return answer.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
