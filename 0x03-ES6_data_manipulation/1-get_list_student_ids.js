// Create a function getListStudentIds:
//   - returns an array of ids from a list of object.

export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
