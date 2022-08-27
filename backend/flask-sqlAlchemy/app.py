#!/bin/bash/python3

from crypt import methods
from flask import Flask, render_template, jsonify, request, flash, redirect, url_for, session, logging
from flask_sqlalchemy import SQLAlchemy
from os import getenv
from sqlalchemy.orm import Session
from models.state import State

app = Flask(__name__)
app.secret_key = "super secret key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://daniel:riodev1305@localhost/prueba'
db = SQLAlchemy(app)

class State(db.Model):
    """
    Model State
    """
    __tablename__ = 'states'
    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True,
        nullable=False)
    name = db.Column(db.String(128), nullable=False)

    def __init__(self, name):
        self.name = name
    
    def to_dict(self):
        new_dict = self.__dict__.copy()
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        cities = [city.name for city in self.cities]
        new_dict["cities"] = cities
        return new_dict


class City(db.Model):
    """
    Model City
    """

    __tablename__ = 'cities'
    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True,
        nullable=False)
    name = db.Column(db.String(128), nullable=False)

    state_id = db.Column(db.Integer, db.ForeignKey('states.id'), nullable=False)
    state = db.relationship('State', backref=db.backref('cities', lazy=True))

    def to_dict(self):
        new_dict = self.__dict__.copy()
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        return new_dict

# db.drop_all()
# db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/states')
def states():
    states = State.query.all()
    # [print(state.name) for state in states]
    return render_template("states.html", states=states)

@app.route("/states/form", methods=["GET", "POST"])
def form_state():
    if request.method == 'POST':
        if not request.form['name']:
            flash('Please enter all the fields', 'error')
        else:
            states = State(request.form['name'])
            db.session.add(states)
            db.session.commit()
            flash('Record was successfully added')
            return redirect(url_for('states'))
    return render_template('form_state.html')

@app.route("/cities")
def cities():
    cities = City.query.all()
    # [print(city.name) for city in cities]
    return render_template("cities.html", cities=cities)

@app.route("/cities/form", methods=["GET", "POST"])
def form_city():
    if request.method == 'POST':
        if not request.form['name'] or not request.form.get('state_id'):
            flash('Please enter all the fields', 'error')
        else:
            city = City(name=request.form['name'], state_id=request.form.get('state_id'))
            db.session.add(city)
            db.session.commit()
            flash('Record was successfully added')
            return redirect(url_for('cities'))
    return render_template('form_city.html', states=State.query.all())


from flask import Blueprint
from flask import jsonify, request, abort
from flask_cors import CORS


CORS(app, origins=['0.0.0.0'])
app.url_map.strict_slashes = False

app_views = Blueprint('/api', __name__)


methods = ["GET", "DELETE", "POST", "PUT"]
@app_views.route("/states", methods=methods)
@app_views.route("/states/<id>", methods=methods)
def states_api(id=None):
    """
    ----------------
    Route for states
    ----------------
    """
    states = State.query.all()
    met = request.method
    if met in "GET":
        if id is None:
            # [print(state.to_dict()) for state in states]
            return jsonify([state.to_dict() for state in states])
        else:
            state = State.query.get(id)
            if state is None:
                abort(404)
            return jsonify(state.to_dict())
    if met in "DELETE":
        state = State.query.get(id)
        if state is None:
            abort(404)
        db.session.delete(state)
        db.session.commit()
        return jsonify(state.to_dict())
    elif met == "POST":
        try:
            data = request.get_json()
            if "name" not in data.keys():
                return jsonify("Missing name"), 400, {'Content-Type':
                                                      'application/json'}
            else:
                new_state = State(name=data["name"])
                db.session.add(new_state)
                db.session.commit()
                return jsonify(new_state.to_dict()), 201, {'Content-Type':
                                                           'application/json'}
        except Exception as err:
            return jsonify("Not a JSON"), 400, {'Content-Type':
                                                'application/json'}
    elif met == "PUT":
        if id:
            state = State.query.get(id)
            if not state:
                abort(404)
            else:
                try:
                    data = request.get_json()
                    for attr, value in data.items():
                        setattr(state, attr, value)
                    db.session.commit()
                    return jsonify(state.to_dict()), 200, {'Content-Type':
                                                           'application/json'}
                except Exception as err:
                    return jsonify("Not a JSON"), 400, {'Content-Type':
                                                        'application/json'}

methods = ["GET", "DELETE", "POST", "PUT"]
@app_views.route("/cities", methods=methods)
@app_views.route("/cities/<id>", methods=methods)
def cities_api(id=None):
    """
    ----------------
    Route for cities
    ----------------
    """
    cities = City.query.all()
    met = request.method
    if met in "GET":
        if id is None:
            # [print(city.to_dict()) for city in cities]
            return jsonify([city.to_dict() for city in cities])
        else:
            city = City.query.get(id)
            if city is None:
                abort(404)
            return jsonify(city.to_dict())
    if met in "DELETE":
        city = City.query.get(id)
        if city is None:
            abort(404)
        db.session.delete(city)
        db.session.commit()
        return jsonify(city.to_dict())
    elif met == "POST":
        try:
            data = request.get_json()
            if "name" not in data.keys():
                return jsonify("Missing name"), 400, {'Content-Type':
                                                      'application/json'}
            if "state" not in data.keys():
                return jsonify("Missing state"), 400, {'Content-Type':
                                                      'application/json'}                                    
            elif db.session.query(State).filter(State.name==data["state"]).first() is None:
                return jsonify("State not found"), 400, {'Content-Type':
                                                             'application/json'}
            else:
                state = db.session.query(State).filter(State.name==data["state"]).first()
                new_city = City(name=data["name"], state_id=state.id)
                db.session.add(new_city)
                db.session.commit()
                return jsonify(new_city.to_dict()), 201, {'Content-Type':
                                                           'application/json'}
        except Exception as err:
            return jsonify("Not a JSON"), 400, {'Content-Type':
                                                'application/json'}
    elif met == "PUT":
        if id:
            city = City.query.get(id)
            if not city:
                abort(404)
            else:
                try:
                    data = request.get_json()
                    for attr, value in data.items():
                        if "state" == attr:
                            state = db.session.query(State).filter(State.name==value).first()
                            if state is None:
                                return jsonify("State not found"), 400, {'Content-Type':
                                                         'application/json'}
                            else:
                                setattr(city, attr, state.id)
                        else:
                            setattr(city, attr, value)
                    print("248")
                    db.session.commit()
                    return jsonify(city.to_dict()), 200, {'Content-Type':
                                                           'application/json'}
                except Exception as err:
                    return jsonify("Not a JSON"), 400, {'Content-Type':
                                                        'application/json'}



app.register_blueprint(app_views, url_prefix="/api")


if __name__ == '__main__':
    app.run(debug=True)

    