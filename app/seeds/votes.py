from app.models import db, Vote

def seed_votes():
    vote1 = Vote(
        userId=1, answerId=3, voteDirection='Up'
    )
    vote2 = Vote(
        userId=2, answerId=1, voteDirection='Up'
    )
    vote3 = Vote(
        userId=3, answerId=2, voteDirection='Down'
    )
    vote4 = Vote(
        userId=4, answerId=9, voteDirection='Up'
    )
    vote5 = Vote(
        userId=3, answerId=9, voteDirection='Up'
    )
    vote6 = Vote(
        userId=2, answerId=9, voteDirection='Up'
    )
    vote7 = Vote(
        userId=1, answerId=9, voteDirection='Up'
    )
    vote8 = Vote(
        userId=3, answerId=9, voteDirection='Up'
    )
    vote9 = Vote(
        userId=1, answerId=1, voteDirection='Down'
    )
    vote10 = Vote(
        userId=2, answerId=1, voteDirection='Down'
    )
    vote11 = Vote(
        userId=4, answerId=2, voteDirection='Up'
    )
    vote12 = Vote(
        userId=4, answerId=2, voteDirection='Up'
    )
    vote13 = Vote(
        userId=4, answerId=3, voteDirection='Down'
    )
    vote14 = Vote(
        userId=4, answerId=3, voteDirection='Down'
    )
    vote15 = Vote(
        userId=4, answerId=3, voteDirection='Down'
    )
    vote16 = Vote(
        userId=2, answerId=3, voteDirection='Down'
    )
    vote17 = Vote(
        userId=2, answerId=4, voteDirection='Up'
    )
    vote18 = Vote(
        userId=3, answerId=4, voteDirection='Up'
    )
    vote19 = Vote(
        userId=3, answerId=4, voteDirection='Up'
    )
    vote20 = Vote(
        userId=3, answerId=4, voteDirection='Up'
    )
    vote21 = Vote(
        userId=3, answerId=5, voteDirection='Down'
    )
    vote22 = Vote(
        userId=3, answerId=6, voteDirection='Up'
    )
    vote23 = Vote(
        userId=3, answerId=7, voteDirection='Down'
    )
    vote24 = Vote(
        userId=3, answerId=8, voteDirection='Up'
    )
    vote25 = Vote(
        userId=3, answerId=2, voteDirection='Down'
    )
    vote26 = Vote(
        userId=3, answerId=1, voteDirection='Up'
    )
    vote27 = Vote(
        userId=3, answerId=1, voteDirection='Up'
    )
    vote28 = Vote(
        userId=3, answerId=1, voteDirection='Up'
    )
    vote29 = Vote(
        userId=3, answerId=3, voteDirection='Up'
    )
    vote30 = Vote(
        userId=3, answerId=3, voteDirection='Up'
    )

    db.session.add(vote1)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.add(vote4)
    db.session.add(vote5)
    db.session.add(vote6)
    db.session.add(vote7)
    db.session.add(vote8)
    db.session.add(vote9)
    db.session.add(vote10)
    db.session.add(vote11)
    db.session.add(vote12)
    db.session.add(vote13)
    db.session.add(vote14)
    db.session.add(vote15)
    db.session.add(vote16)
    db.session.add(vote17)
    db.session.add(vote18)
    db.session.add(vote19)
    db.session.add(vote20)
    db.session.add(vote21)
    db.session.add(vote22)
    db.session.add(vote23)
    db.session.add(vote24)
    db.session.add(vote25)
    db.session.add(vote26)
    db.session.add(vote27)
    db.session.add(vote28)
    db.session.add(vote29)
    db.session.add(vote30)

    db.session.commit()

def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()
