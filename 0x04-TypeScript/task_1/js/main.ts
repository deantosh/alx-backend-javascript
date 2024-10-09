// Define the Teacher interface with index signature for dynamic properties
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Index signature for any additional attributes
}

// Creating the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number; // Required attribute
}

// Define the interface for the function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
