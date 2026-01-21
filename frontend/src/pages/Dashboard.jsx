import { useEffect, useState } from "react";
import api from "../services/api";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
    } catch (error) {
      console.log("Error fetching students", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await api.delete(`/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.log("Delete error", error);
    }
  };

  const handleUpdateComplete = () => {
    setEditStudent(null);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Career Assessment Dashboard</h2>
      <p style={{ color: "#555", marginBottom: "20px" }}>
        Add, update, and manage student assessment data
      </p>

      <StudentForm
        onStudentAdded={fetchStudents}
        editStudent={editStudent}
        onUpdate={handleUpdateComplete}
      />

      <StudentTable
        students={students}
        onDelete={handleDelete}
        onEdit={setEditStudent}
      />
    </div>
  );
}

export default Dashboard;
