//Dependencies
const mysql = require("mysql2");
const inquirer = require("inquirer");
//const consoleTables = require("console.table");

// created blank arrays for my tables
var managers = [];
var roles = [];
var departments = [];
var employees = [];

// connection to mysql database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeesDB",
});
function menu() {
    return inquirer.prompt(
        {
            type:"list",
            message:"what you would like to do?",
            name:"option",
            choices:["view employees", "view all roles", "view all departments", "add a department", "add a role", "update an employee role", "add employee", "exit"]
        }
    )
    .then(function(info) {
        console.log(info)
        if(info.option==="view employees"){
            viewEmployees()
        
        }
        if(info.option===)
    }) 
}  
        // employee function goes here
            function viewEmployees() 
                const request = "SELECT * FROM employees";
                db.query(request, function(err, res) {
                  if (err) throw err;
                  console.log("Viewing All Employees");
                  console.table(res);
                
                })

       
       
            // all roles function goes here
            function viewRoles() {
                let request = "SELECT * FROM roles";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("Viewing All Roles");
                    console.table(res);
             
                })
        }
   

        
            //all departments function goes here
            function viewDepartments() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("Viewing All Departments");
                    console.table(res);
                })
        }

        
            //add a department function goes here
        
       
            //add a role function goes here
        

        
            //update an employee role function goes here
       

        
            //add employee function goes here
  

// function to insert employees into an array after retrieving them from the database
const getEmployee = () => {
    connection.query(
      `SELECT first_name, last_name, id FROM employee`,
      (err, res) => {
        if (err) throw err;
        console.table(res)
      }
    );
  };
  menu()