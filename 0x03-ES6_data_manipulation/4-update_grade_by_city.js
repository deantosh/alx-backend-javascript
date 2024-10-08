// Create a function updateStudentGradeByCity
//   - returns an array of students for a specific city with their new grade.

export default function updateStudentGradeByCity(students, city, newGrades) {
  // filter students based on their location
  const filteredStudents = students.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    // copy to avoid changing the original arra
    const updatedStudent = { ...student };

    for (const index in newGrades) {
      if (updatedStudent.id === newGrades[index].studentId) {
        updatedStudent.grade = newGrades[index].grade;
      }
    }

    // If no matching grade is found, set grade to 'N/A'
    if (!updatedStudent.grade) {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });
}
