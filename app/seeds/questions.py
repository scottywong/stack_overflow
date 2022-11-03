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
    question4 = Question(
        userId=4 ,title='Fourth Question', body='Where are my keys?'
    )
    question5 = Question(
        userId=1 ,title='I might be in love with my dentist', body='How do I know for sure if I am in love with my dentist?'
    )
    question6 = Question(
        userId=4 ,title='What are beefy nacho feet?', body='How soon can taco bell come out with beefy nacho feet?'
    )
    question7 = Question(
        userId=2 ,title='What is a cruise ship?', body='I just woke up from a coma. I am very thirsty. How can I buy a cruise ship and what is a cruise ship?'
    )
    question8 = Question(
        userId=1 ,title='Is this project really good?', body='How do I know if I am tall enough to go on a rollercoaster? How can I be friends with the amazing people who built this site?? I am also very lonely. Am I tall enough to be friends with them?'
    )

    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)

    db.session.commit()

def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()
