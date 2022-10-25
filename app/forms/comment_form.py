from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CommentForm(FlaskForm):
    answerId = IntegerField('answerId', validators=DataRequired())
    body = TextAreaField('Comment', validators=[DataRequired()])
    submit = SubmitField('Submit')
