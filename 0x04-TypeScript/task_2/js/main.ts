// Define DirectorInterface with the required methods
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define TeacherInterface with the required methods
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement Director class
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Implement Teacher class
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// Function to create either a Director or a Teacher based on the salary
function createEmployee(salary: number | string): Director | Teacher {
    // Check if salary is a number and less than 500
    if (typeof salary === "number" && salary < 500) {
        return new Teacher(); // Return a Teacher instance
    } else {
        return new Director(); // Return a Director instance
    }
}

// Type predicate function to check if an employee is a Director
function isDirector(employee: any): employee is Director {
    return employee instanceof Director;
}

// Function to execute work based on the employee type
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks(); // Calls workDirectorTasks for Director
    } else {
        return employee.workTeacherTasks(); // Calls workTeacherTasks for Teacher
    }
}

// Define a string literal type for Subjects
type Subjects = 'Math' | 'History';

// Function to teach a class based on the todayClass argument
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // Although we can't reach this point due to the type definition, TypeScript requires a return value.
    throw new Error('Invalid subject'); // Optional, for safety
}
