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
    answer4 = Answer(
        userId=4, questionId=1, body='You need to get some thicker skin and preferably get a face tattoo.'
    )
    answer5 = Answer(
        userId=3, questionId=4, body='You should check your pants pockets. Otherwise you are out of luck.'
    )
    answer6 = Answer(
        userId=2, questionId=5, body='Probably if you go more than twice a year.'
    )
    answer7 = Answer(
        userId=1, questionId=6, body='You will know when you see them. In the meantime you should try a cheesy gordita crunch. It is only ok.'
    )
    answer8 = Answer(
        userId=4, questionId=7, body='What is not a crusie ship? It is when you end up in the same place you started but you tell yourself you went somewhere.'
    )
    answer9 = Answer(
        userId=3, questionId=8, body='This project is so awesome and beautiful. I think the people who made this should all get high paying jobs.'
    )

    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.add(answer7)
    db.session.add(answer8)
    db.session.add(answer9)

    db.session.commit()

def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
