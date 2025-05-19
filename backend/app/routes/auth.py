from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from app.models import User
from app import db

def register():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(
        username=data['username'],
        email=data['email'],
        password=hashed_password
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Registered successfully'}), 201

def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    
    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401
        
    access_token = create_access_token(identity=user.id)
    return jsonify({'token': access_token}), 200