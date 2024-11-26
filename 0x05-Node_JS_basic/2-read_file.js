// Using the database database.csv (provided in project description),
// create a function countStudents.

const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Split file content into lines and filter out empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ensure the file is not empty
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Extract headers and rows
    const headers = lines[0].split(',');
    const rows = lines.slice(1);

    const students = {};
    let totalStudents = 0;

    rows.forEach((line) => {
      const studentData = line.split(',');

      if (studentData.length === headers.length) {
        const field = studentData[3]; // Assuming 4th column is the field
        const firstName = studentData[0]; // Assuming 1st column is the first name

        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
