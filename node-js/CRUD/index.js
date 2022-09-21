const express = require("express")
const mysql = require("mysql")
const app = express();
app.use(express.json())

//connect to DB
const tableName = 'emp_details';
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeedb'
})
conn.connect((err) => {
    if (!err) {
        console.log("Connected to DB")
    } else {
        console.log("Error in connection" + JSON.stringify(err, undefined, 2))
    }
})

//Get All Employee
app.get('/emp', (req, res) => {
    let selQry = `Select * from ${tableName}`
    conn.query(selQry, (err, results, fieilds) => {
        if (err) {
            res.send(err)
        } else {
            res.send(results)
        }
    })
})

//Get Emp by id 
app.get("/emp/:id", (req, res) => {
    var empId = req.params.id;
    let selQry = `Select * from ${tableName} where emp_id = ${empId}`
    conn.query(selQry, (err, results, fieilds) => {
        if (err) {
            res.send(err)
        } else {
            if (results.length > 0) {
                res.send(results)
            } else {
                res.send({ "Err": "No record found" })
            }
        }
    })
})

//insert emp 
app.post('/emp', (req, res) => {
    var emp_name = req.body.emp_name;
    var emp_code = req.body.emp_code;
    var emp_sal = req.body.emp_sal;
    let insertQry = `insert into ${tableName} (emp_name,emp_code,emp_sal) values ('${emp_name}','${emp_code}','${emp_sal}')`;
    conn.query(insertQry, (err, results) => {
        if (err) {
            res.send(err)
        } else {
            /*
            {
                "fieldCount": 0,
                "affectedRows": 1,
                "insertId": 1002,
                "serverStatus": 2,
                "warningCount": 0,
                "message": "",
                "protocol41": true,
                "changedRows": 0
            }
            */
            if(results.affectedRows == 1 && results.insertId != null){
                res.send({ "Success": "Record inserted successfully" });
            }else{
                res.send({ "Error": "Error in insertion" })
            }
            
        }
    })
})
app.listen(5000, (req, res) => {
    console.log("Server is up and running on PORT 5000")
})