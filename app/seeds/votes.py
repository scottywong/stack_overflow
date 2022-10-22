from app.models import db, Vote

def seed_votes():
    vote1 = Vote(
        userId=1, answerId=3, voteDirection='Up'
    )
    vote2 = Vote(
        userId=2, answerId=1, voteDirection='Down'
    )
    vote3 = Vote(
        userId=3, answerId=2, voteDirection='Down'
    )

    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)

    db.session.commit()

def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
