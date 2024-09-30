export default function createEmployeesObject(departmentName, employees) {
    const EmpObj = {
	[departmentName]: employees,
    };
    return EmpObj; 
}
