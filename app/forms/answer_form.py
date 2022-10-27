from flask_wtf import FlaskForm
from wtforms import TextAreaField
from wtforms.validators import DataRequired, Length
from app.models import Question


class AnswerForm(FlaskForm):
    body = TextAreaField('body', validators=[DataRequired(), Length(max=2000, message=None)])
