from .db import db
from flask_login import login_required, current_user
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
    def get_votes(self):
        count = 0
        voted = True
        upVote = Vote.query.filter(Vote.answerId == self.id).filter(Vote.voteDirection=='Up').all()
        if upVote is None:
            up = 0
        else:
            up = len(upVote)
        downVote = Vote.query.filter(Vote.answerId == self.id).filter(Vote.voteDirection=='Down').all()
        if downVote is None:
            down = 0
        else:
            down = len(downVote)
        count = count + up 
        count = count - down
        hasVoted = Vote.query.filter(Vote.answerId == self.id).filter(Vote.userId == current_user.id).all()
        print(len(hasVoted))
        if len(hasVoted) == 0 :
            voted = False
        vote_id = Vote.query.filter(Vote.answerId == self.id).filter(Vote.userId == current_user.id).first()
        if vote_id is not None:
            vid = vote_id.id
        if vote_id is None:
            vid = None        
        return { 
            "total" : count,
            "hasVoted" : voted,
            "voteId" : vid
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
            'Votes' : self.get_votes()
        }
