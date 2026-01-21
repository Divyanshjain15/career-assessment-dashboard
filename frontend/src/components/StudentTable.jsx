function StudentTable({ students, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Student List</h3>

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th style={{ padding: "10px" }}>Name</th>
              <th style={{ padding: "10px" }}>Class</th>
              <th style={{ padding: "10px" }}>Interests</th>
              <th style={{ padding: "10px" }}>Score</th>
              <th style={{ padding: "10px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td style={{ padding: "8px" }}>{student.name}</td>
                <td style={{ padding: "8px" }}>{student.student_class}</td>
                <td style={{ padding: "8px" }}>{student.interests}</td>
                <td style={{ padding: "8px" }}>{student.aptitude_score}</td>
                <td style={{ padding: "8px" }}>
                  <button
                    onClick={() => onEdit(student)}
                    style={{ marginRight: "8px" }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(student.id)}
                    style={{ color: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentTable;
