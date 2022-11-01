from .db import db
from datetime import datetime
from .user import User

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    answerId = db.Column(db.Integer, db.ForeignKey('answers.id'))
    body = db.Column(db.String(2000), nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='comments')
    answer = db.relationship('Answer', back_populates='comments')

    def get_user(self):
        user = User.query.filter(User.id == self.userId).first()
        return user.username

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'username': self.get_user(),
            'answerId': self.answerId,
            'body': self.body,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
