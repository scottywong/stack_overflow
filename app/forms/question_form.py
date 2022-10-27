from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError,Length
from app.models import User, Question


class QuestionForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), Length(max=200, message=None)])
    body = StringField('body', validators=[DataRequired(), Length(max=2000, message=None)])
