from .db import db
import datetime

class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(200), nullable=False)
    body = db.Column(db.String(2000), nullable=False)
    created_on = db.Column(db.Date, default=datetime.datetime.utcnow)
    updated_on = db.Column(db.Date, default=datetime.datetime.utcnow)

    user = db.relationship('User', back_populates='questions')


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'title': self.title
            'body': self.body
            'created_on': self.created_on
            'updated_on': self.updated_on
        }
