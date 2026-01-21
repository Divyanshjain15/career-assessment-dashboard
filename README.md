### Career Assessment Dashboard – Full Stack Assignment

### Project Overview

This project is a **mini Career Assessment Dashboard** built as part of the **Career-Mitra Full Stack Developer Assignment**.
It allows users to **add, view, update, and delete student assessment records** through a clean React frontend and a FastAPI backend.

The application demonstrates:

- REST API development
- Frontend–backend integration
- Basic CRUD operations
- Clean project structure and readable code

---

### Tech Stack Used

### Backend

- **Python**
- **FastAPI**
- **SQLAlchemy ORM**
- **SQLite** (local database)

### Frontend

- **React.js**
- **Axios** (API calls)
- **Basic CSS (inline styling)**

### Tools

- Git & GitHub
- VS Code

---

### Project Structure

```
assignment/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── crud.py
│   └── students.db
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentForm.jsx
│   │   │   └── StudentTable.jsx
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```



### API Endpoints

| Method | Endpoint       | Description         |
| ------ | -------------- | ------------------- |
| POST   | /students      | Add new student     |
| GET    | /students      | Fetch all students  |
| GET    | /students/{id} | Fetch student by ID |
| PUT    | /students/{id} | Update student      |
| DELETE | /students/{id} | Delete student      |

---

### Features Implemented

- Add student assessment data
- View all student records
- Edit existing student details
- Delete student records with confirmation
- Proper error handling
- CORS enabled for frontend-backend communication


**Thank you for reviewing my assignment.**
