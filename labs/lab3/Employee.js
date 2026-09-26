// Employee Module - exported below and used in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

// Returns every employee with all details
const getAllEmployees = () => employees

// Returns "firstName lastName" strings sorted in ascending order
const getEmployeeNames = () =>
    employees
        .map(emp => `${emp.firstName} ${emp.lastName}`)
        .sort((a, b) => a.localeCompare(b))

// Returns the sum of every employee's Salary
const getTotalSalary = () =>
    employees.reduce((total, emp) => total + emp.Salary, 0)

// FIX: the array was declared but never exported
module.exports = {
    employees,
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
}
