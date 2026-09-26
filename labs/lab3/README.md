# COMP3123 Lab Exercise 03 - Node Employee Module

- **Student:** Cem Dudu
- **Student ID:** 101496484

A small web server built with Node's core `http` module (no Express). Employee data and helper functions live in a CommonJS module, `Employee.js`, which `index.js` uses.

## Run

```bash
npm install     # installs nodemon (dev only)
npm start       # node ./index.js
npm run dev     # nodemon ./index.js (auto-restart)
```

The server listens on **http://localhost:8081**, or on `PORT` if that is set.

## Routes

| Method | URL                     | Status | Content-Type       | Response                                             |
|--------|-------------------------|--------|--------------------|------------------------------------------------------|
| GET    | `/`                     | 200    | `text/html`        | `<h1>Welcome to Lab Exercise 03</h1>`                |
| GET    | `/employee`             | 200    | `application/json` | All employee details                                 |
| GET    | `/employee/names`       | 200    | `application/json` | `["Denial Roast","Krish Lee","Pritesh Patel","Racks Jacson"]` |
| GET    | `/employee/totalsalary` | 200    | `application/json` | `{"total_salary":23500}`                             |
| GET    | anything else           | 404    | `application/json` | `{"error":"Not Found"}`                              |
| non-GET| any                     | 405    | `application/json` | `{"error":"Method Not Allowed"}`                     |

## Employee.js exports

- `employees`: the employee array
- `getAllEmployees()`: returns every employee
- `getEmployeeNames()`: returns `"firstName lastName"` strings sorted ascending with `localeCompare`
- `getTotalSalary()`: returns the sum of `Salary`, calculated with `reduce`

## Fixes made

1. `Employee.js` never exported anything. It now uses `module.exports`.
2. `index.js` never required the Employee module.
3. No route returned, so every request fell through to the trailing 404 `res.end()`. Each branch now returns.
4. No route called `res.writeHead`, so Content-Type was never set. Every branch now sets it.
5. The 405 and 404 responses were sent with status 200 and no JSON header. They now send the correct status with `application/json`.
6. `package.json` listed an unused `express` dependency and had no `start` script. Both are fixed.
