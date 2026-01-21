from sqlalchemy.orm import Session
from models import Student
from schemas import StudentCreate

def create_student(db: Session, student: StudentCreate):
    new_student = Student(
        name=student.name,
        student_class=student.student_class,
        interests=student.interests,
        aptitude_score=student.aptitude_score
    )
    db.add(new_student)
    db.commit()
    db.refresh(new_student)
    return new_student

def get_all_students(db: Session):
    return db.query(Student).all()

def get_student_by_id(db: Session, student_id: int):
    return db.query(Student).filter(Student.id == student_id).first()

def update_student(db: Session, student_id: int, student: StudentCreate):
    db_student = db.query(Student).filter(Student.id == student_id).first()

    if not db_student:
        return None

    db_student.name = student.name
    db_student.student_class = student.student_class
    db_student.interests = student.interests
    db_student.aptitude_score = student.aptitude_score

    db.commit()
    db.refresh(db_student)
    return db_student

def delete_student(db: Session, student_id: int):
    db_student = db.query(Student).filter(Student.id == student_id).first()

    if not db_student:
        return None

    db.delete(db_student)
    db.commit()
    return db_student
