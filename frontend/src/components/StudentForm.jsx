import { useEffect, useState } from "react";
import api from "../services/api";

function StudentForm({ onStudentAdded, editStudent, onUpdate }) {
  const [formData, setFormData] = useState({
    name: "",
    student_class: "",
    interests: "",
    aptitude_score: "",
  });

  useEffect(() => {
    if (editStudent) {
      setFormData(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editStudent) {
        await api.put(`/students/${editStudent.id}`, {
          ...formData,
          aptitude_score: Number(formData.aptitude_score),
        });
        onUpdate();
      } else {
        await api.post("/students", {
          ...formData,
          aptitude_score: Number(formData.aptitude_score),
        });
        onStudentAdded();
      }

      setFormData({
        name: "",
        student_class: "",
        interests: "",
        aptitude_score: "",
      });
    } catch (error) {
      console.log("Form error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>{editStudent ? "Edit Student" : "Add Student"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />

      <input
        name="student_class"
        placeholder="Class"
        value={formData.student_class}
        onChange={handleChange}
      />
      <br />

      <input
        name="interests"
        placeholder="Interests"
        value={formData.interests}
        onChange={handleChange}
      />
      <br />

      <input
        type="number"
        name="aptitude_score"
        placeholder="Aptitude Score"
        value={formData.aptitude_score}
        onChange={handleChange}
      />
      <br />

      <button type="submit">{editStudent ? "Update Student" : "Submit"}</button>
    </form>
  );
}

export default StudentForm;
