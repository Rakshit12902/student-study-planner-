from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Subject, User
from app import db

@jwt_required()
def get_subjects():
    user_id = get_jwt_identity()
    subjects = Subject.query.filter_by(user_id=user_id).all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'exam_date': s.exam_date.isoformat(),
        'priority': s.priority
    } for s in subjects])

@jwt_required()
def add_subject():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_subject = Subject(
        name=data['name'],
        exam_date=data['exam_date'],
        priority=data['priority'],
        user_id=user_id
    )
    db.session.add(new_subject)
    db.session.commit()
    return jsonify({'message': 'Subject added'}), 201