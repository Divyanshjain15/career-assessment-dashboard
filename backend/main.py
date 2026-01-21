from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine
import models
import schemas
import crud

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# ✅ CORS CONFIG
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# -------------------- ROUTES --------------------

@app.post("/students", response_model=schemas.StudentResponse)
def add_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    return crud.create_student(db, student)

@app.get("/students", response_model=list[schemas.StudentResponse])
def get_students(db: Session = Depends(get_db)):
    return crud.get_all_students(db)

@app.get("/students/{student_id}", response_model=schemas.StudentResponse)
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = crud.get_student_by_id(db, student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

# ✅ UPDATE STUDENT
@app.put("/students/{student_id}", response_model=schemas.StudentResponse)
def update_student(
    student_id: int,
    student: schemas.StudentCreate,
    db: Session = Depends(get_db)
):
    updated_student = crud.update_student(db, student_id, student)
    if not updated_student:
        raise HTTPException(status_code=404, detail="Student not found")
    return updated_student

# ✅ DELETE STUDENT
@app.delete("/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    deleted_student = crud.delete_student(db, student_id)
    if not deleted_student:
        raise HTTPException(status_code=404, detail="Student not found")
    return {"message": "Student deleted successfully"}
