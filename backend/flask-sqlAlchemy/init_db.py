from app import State, City, db

state1 = State(name='California')
state2 = State(name='New York')
state3 = State(name='Texas')

city1 = City(name='Los Angeles', state=state1)
city2 = City(name='New York', state=state2)
city3 = City(name='Houston', state=state3)

db.session.add_all([state1, state2, state3, city1, city2, city3])
db.session.commit()