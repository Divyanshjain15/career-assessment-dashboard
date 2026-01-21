from pydantic import BaseModel

class StudentCreate(BaseModel):
    name: str
    student_class: str
    interests: str
    aptitude_score: int

class StudentResponse(StudentCreate):
    id: int

    class Config:
        orm_mode = True
