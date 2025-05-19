from flask import request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..models.user import User
from ..config.database import db
from datetime import timedelta

def init_auth_routes(app):
    @app.route('/api/auth/register', methods=['POST'])
    def register():
        data = request.get_json()
        
        if User.query.filter_by(username=data['username']).first():
            return jsonify({'error': 'Username already exists'}), 400
            
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'error': 'Email already exists'}), 400
            
        new_user = User(
            username=data['username'],
            email=data['email']
        )
        new_user.set_password(data['password'])
        
        db.session.add(new_user)
        db.session.commit()
        
        return jsonify({'message': 'User registered successfully'}), 201

    @app.route('/api/auth/login', methods=['POST'])
    def login():
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        
        if not user or not user.check_password(data['password']):
            return jsonify({'error': 'Invalid username or password'}), 401
            
        expires = timedelta(days=7)
        access_token = create_access_token(identity=user.id, expires_delta=expires)
        
        return jsonify({
            'token': access_token,
            'user_id': user.id,
            'username': user.username
        }), 200

    @app.route('/api/auth/me', methods=['GET'])
    @jwt_required()
    def get_current_user():
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        return jsonify({
            'user_id': user.id,
            'username': user.username,
            'email': user.email
        }), 200