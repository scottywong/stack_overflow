from .db import db

from .comment import Comment
from .vote import Vote
from datetime import datetime

class Answer(db.Model):
    __tablename__ = 'answers'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    questionId = db.Column(db.Integer, db.ForeignKey('questions.id'))
    body = db.Column(db.String(2000), nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='answers')
    question = db.relationship('Question', back_populates='answers')
    comments = db.relationship('Comment', back_populates='answer',cascade='all, delete-orphan')
    votes = db.relationship('Vote', back_populates='answer', cascade='all, delete-orphan')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'questionId': self.questionId,
            'body': self.body,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }

    def to_dict2(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'questionId': self.questionId,
            'body': self.body,
            'created_on': self.created_on,
            'updated_on': self.updated_on,
            'Comments' : [comment.to_dict() for comment in self.comments],
            'Votes' : [vote.to_dict() for vote in self.votes]
        }
