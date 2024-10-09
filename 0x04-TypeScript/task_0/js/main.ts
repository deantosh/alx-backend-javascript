// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

// Create an array to hold the students
const studentsList: Student[] = [student1, student2];

// Function to render the students in a table
function renderStudentsTable(students: Student[]) {
    // Create a table element
    const table = document.createElement("table");
    table.border = "1";

    // Create the table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headerCell1 = headerRow.insertCell();
    headerCell1.textContent = "First Name";
    const headerCell2 = headerRow.insertCell();
    headerCell2.textContent = "Location";

    // Create a table body
    const body = table.createTBody();

    // Loop through the students and add rows to the table
    students.forEach((student) => {
        const row = body.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;
        const cell2 = row.insertCell();
        cell2.textContent = student.location;
    });

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);
