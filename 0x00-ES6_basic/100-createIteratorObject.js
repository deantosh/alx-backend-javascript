export default function createIteratorObject(report) {
  const employeesName = [];

  for (const department of Object.values(report.allEmployees)) {
    employeesName.push(...department);
  }
  return employeesName[Symbol.iterator]();
}
