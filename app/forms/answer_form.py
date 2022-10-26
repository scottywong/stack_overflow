from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user
from app.models import Question

# Check that question exists
def valid_question(form, field):
    questionId = field.data
    question = Question.query.get(questionId)
    if question is None:
        raise ValidationError('Question not found')

# Make sure the current user cannot answer a question they wrote
def answer_different_than_question(form, field):
    questionId = field.data
    question = Question.query.get(questionId)
    if current_user.id == question.userId:
        raise ValidationError('Cannot answer a question that you asked')

class AnswerForm(FlaskForm):
    questionId = IntegerField('questionId', validators=[DataRequired(), valid_question, answer_different_than_question])
    body = TextAreaField('Answer', validators=[DataRequired()])
