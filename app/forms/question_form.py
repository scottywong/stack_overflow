from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Question


class QuestionForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    body = StringField('body', validators=[DataRequired()])