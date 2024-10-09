// Define the Teacher interface within a namespace
namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
        experienceTeachingC?: number;
        experienceTeachingJava?: number;
        experienceTeachingReact?: number;
    }

    // Define the Subject class
    export class Subject {
        teacher!: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }

    // Define the Cpp class extending Subject
    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingC
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }

    // Define the Java class extending Subject
    export class Java extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }

    // Define the React class extending Subject
    export class React extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingReact
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }

    // Create and export constants for each subject
    export const cpp = new Cpp();
    export const java = new Java();
    export const react = new React();

    // Create and export a Teacher object
    export const cTeacher: Teacher = {
        firstName: "John",
        lastName: "Doe",
        experienceTeachingC: 10,
        experienceTeachingJava: 5,
        experienceTeachingReact: 3
    };
}

// Log to the console for each subject
console.log("C++");
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

console.log("Java");
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

console.log("React");
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
