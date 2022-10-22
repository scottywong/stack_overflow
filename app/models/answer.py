from .db import db
import datetime

class Answer(db.Model):
    __tablename__ = 'answers'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    questionId = db.Column(db.Integer, db.ForeignKey('questions.id'))
    body = db.Column(db.String(2000), nullable=False)
    created_on = db.Column(db.Date, default=datetime.datetime.utcnow)
    updated_on = db.Column(db.Date, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='answers')
    question = db.relationship('Question', back_populates='answers')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'questionId': self.questionId
            'body': self.body
            'created_on': self.created_on
            'updated_on': self.updated_on
        }
