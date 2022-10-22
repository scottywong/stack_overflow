from .db import db
from datetime import datetime

class Vote(db.Model):
    __tablename__ = 'votes'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    answerId = db.Column(db.Integer, db.ForeignKey('answers.id'))
    voteDirection = db.Column(db.String)
    created_on = db.Column(db.Date, default=datetime.datetime.utcnow)
    updated_on = db.Column(db.Date, onupdate=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='votes')
    answer = db.relationship('Answer', back_populates='votes')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'answerId': self.answerId
            'voteDirection': self.voteDirection
            'created_on': self.created_on
            'updated_on': self.updated_on
        }
