from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class AnswerForm(FlaskForm):
    questionId = IntegerField('questionId', validators=DataRequired())
    body = TextAreaField('Answer', validators=[DataRequired()])
    submit = SubmitField('Submit')
