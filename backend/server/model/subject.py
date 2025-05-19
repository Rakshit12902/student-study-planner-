from ..config.database import db
from datetime import datetime

class Subject(db.Model):
    __tablename__ = 'subjects'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    exam_date = db.Column(db.DateTime, nullable=False)
    priority = db.Column(db.Integer, nullable=False, default=3)
    hours_needed = db.Column(db.Float, nullable=False, default=10)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    
    study_sessions = db.relationship('StudySession', backref='subject', lazy=True)
    
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'exam_date': self.exam_date.isoformat(),
            'priority': self.priority,
            'hours_needed': self.hours_needed,
            'hours_completed': sum(session.duration for session in self.study_sessions)
        }