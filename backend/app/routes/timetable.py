from datetime import datetime, timedelta
from ..models.subject import Subject
from ..models.user import User

def generate_timetable(user_id, start_date, end_date):
    user = User.query.get(user_id)
    subjects = Subject.query.filter_by(user_id=user_id).all()
    
    if not subjects:
        return {}
    
    # Calculate total priority and remaining hours
    total_priority = sum(subject.priority for subject in subjects)
    subject_data = []
    
    for subject in subjects:
        completed_hours = sum(session.duration for session in subject.study_sessions)
        remaining_hours = max(0, subject.hours_needed - completed_hours)
        subject_data.append({
            'subject': subject,
            'remaining_hours': remaining_hours,
            'priority_score': subject.priority * (1 if remaining_hours > 0 else 0)
        })
    
    # Filter out subjects with no remaining hours
    active_subjects = [sd for sd in subject_data if sd['remaining_hours'] > 0]
    if not active_subjects:
        return {}
    
    total_priority = sum(sd['priority_score'] for sd in active_subjects)
    
    # Generate timetable for each day
    timetable = {}
    current_date = start_date
    
    while current_date <= end_date:
        day_name = current_date.strftime('%A')
        day_sessions = []
        
        # Example: 2 study sessions per day (morning and evening)
        time_slots = [
            {'start': '09:00', 'duration': 2},
            {'start': '18:00', 'duration': 2}
        ]
        
        for slot in time_slots:
            # Find best subject for this slot
            best_subject = None
            best_score = 0
            
            for subj_data in active_subjects:
                if subj_data['remaining_hours'] <= 0:
                    continue
                    
                # Calculate urgency score (higher for closer exams)
                days_until_exam = (subj_data['subject'].exam_date - current_date).days
                urgency = max(1, 10 - days_until_exam) if days_until_exam > 0 else 10
                
                score = subj_data['priority_score'] * urgency
                
                if score > best_score:
                    best_score = score
                    best_subject = subj_data
            
            if best_subject:
                session_duration = min(slot['duration'], best_subject['remaining_hours'])
                day_sessions.append({
                    'subject_id': best_subject['subject'].id,
                    'subject_name': best_subject['subject'].name,
                    'start_time': slot['start'],
                    'duration': session_duration
                })
                best_subject['remaining_hours'] -= session_duration
        
        if day_sessions:
            timetable[current_date.strftime('%Y-%m-%d')] = {
                'day_name': day_name,
                'sessions': day_sessions
            }
        
        current_date += timedelta(days=1)
    
    return timetable
