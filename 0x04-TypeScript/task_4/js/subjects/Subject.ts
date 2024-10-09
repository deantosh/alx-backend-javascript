namespace Subjects {
    export class Subject {
        private teacher!: Teacher; // Teacher interface implementation

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
