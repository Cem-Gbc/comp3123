var http = require("http");
// FIX: the Employee module was never required
const employeeModule = require("./Employee");
console.log("Lab 03 -  NodeJs");

// Helper so every JSON branch sets its status + Content-Type and ends exactly once
const sendJSON = (res, statusCode, body) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body));
}

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        // FIX: 405 body was sent with a 200 status and no JSON header; also return so nothing else runs
        return sendJSON(res, 405, { error: http.STATUS_CODES[405] })
    } else {
        if (req.url === '/') {
            // FIX: set text/html via writeHead and return so we don't fall through to the 404
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
            return
        }

        if (req.url === '/employee') {
            // Display all details for employees in JSON format
            return sendJSON(res, 200, employeeModule.getAllEmployees())
        }

        if (req.url === '/employee/names') {
            // Display all employees {first name + lastname} in Ascending order in JSON Array
            return sendJSON(res, 200, employeeModule.getEmployeeNames())
        }

        if (req.url === '/employee/totalsalary') {
            // Display Sum of all employees salary as { "total_salary" : <number> }
            return sendJSON(res, 200, { total_salary: employeeModule.getTotalSalary() })
        }

        // FIX: 404 now sends a real 404 status with a JSON header (previously every request hit this res.end)
        return sendJSON(res, 404, { error: http.STATUS_CODES[404] })
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
