from app.models import db, Answer

def seed_answers():
    answer1 = Answer(
        userId=3, questionId=1, body='I know more than you do, idiot.'
    )
    answer2 = Answer(
        userId=1, questionId=2, body='I know waaay more than you do, stupid.'
    )
    answer3 = Answer(
        userId=2, questionId=3, body='I am really craving oreos.'
    )

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)

    db.session.commit()

def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
