from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Answer

# Check that answer exists
def valid_answer(form, field):
    answerId = field.data
    answer = Answer.query.get(answerId)
    if answer is None:
        raise ValidationError('Answer not found')

class CommentForm(FlaskForm):
    answerId = IntegerField('answerId', validators=[DataRequired(), valid_answer])
    body = TextAreaField('Comment', validators=[DataRequired()])
