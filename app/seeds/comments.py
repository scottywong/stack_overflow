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
    comment4 = Comment(
        userId=4, answerId=1, body='You are very mean and not helpful.'
    )
    comment5 = Comment(
        userId=1, answerId=4, body='No, do not get a face tattoo. You should grow a huge beard.'
    )
    comment6 = Comment(
        userId=2, answerId=5, body='What if they do not have pants pockets??'
    )
    comment7 = Comment(
        userId=4, answerId=6, body='How often do you floss??'
    )
    comment8 = Comment(
        userId=3, answerId=7, body='This made me very hungry, how dare you.'
    )
    comment9 = Comment(
        userId=4, answerId=9, body='I agree!! This is amazing you are all hired!'
    )
    comment10 = Comment(
        userId=1, answerId=9, body='Can you work on Saturday? We will have cinnamon rolls...'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
