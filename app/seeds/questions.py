from app.models import db, Question

def seed_questions():
    question1 = Question(
        userId=1 ,title='First Question', body='How do I become a bully?'
    )
    question2 = Question(
        userId=2 ,title='Second Question', body='How do I become a better bully?'
    )
    question3 = Question(
        userId=3 ,title='Third Question', body='How do I become the best bully?'
    )

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)

    db.session.commit()

def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()
