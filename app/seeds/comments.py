from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        userId=1, answerId=2, body='Who hurt you?'
    )
    comment2 = Comment(
        userId=2, answerId=3, body='That was really unhelpful'
    )
    comment3 = Comment(
        userId=3, answerId=1, body='I also want oreos.'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
