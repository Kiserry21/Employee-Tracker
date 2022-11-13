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
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeesDB",
},
console.log("employeesDB"));
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
        if(info.option==="view all roles"){
            viewRoles()
        }
        if(info.option==="view all departments"){
            viewDepartments()
        }
        if(info.option==="add a department"){
            addDepartment()
        }
        if(info.option==="add a role"){
            addRole()
        }
        if(info.option==="update an employee role"){
            updateAnEmployeeRole()
        }
        if(info.option==="add employee"){
            addEmployee()
        }

        }) 
}  
        // employee function goes here
            function viewEmployees(){ 
                const request = "SELECT * FROM employee";
                db.query(request, function(err, res) {
                  if (err) throw err;
                  console.log("Viewing All Employees");
                  console.table(res);
                   menu()
                
                })
            }

       // all roles function goes here
            function viewRoles() {
                let request = "SELECT * FROM role";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("Viewing All Roles");
                    console.table(res);
                    menu()
             
                })
        }
   
        //all departments function goes here
            function viewDepartments() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("Viewing All Departments");
                    console.table(res);
                    menu()
                })
        }

        //add a department function goes here
            function addDepartment() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("add a department");
                    console.table(res);
                    menu()
                })
        }
        
        //add a role function goes here
            function addRole() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("add a role");
                    console.table(res);
                    menu()
                })
        }
        
      //update an employee role function goes here
            function updateAnEmployeeRole() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("update an employee role");
                    console.table(res);
                    menu()
                })
        }
       
        //add employee function goes here
            function addEmployee() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("add employee");
                    console.table(res);
                    menu()
                })
        }
  
        function newEmployee() {
            inquirer.prompt ([
                {
                type: 'input',
                message: 'Enter employee first name.',
                name: 'FirstName'
                },
                {
                    type: 'input',
                    message: 'Enter employee last name.',
                    name: 'LastName'
                },
                {
                    type: 'input',
                    message: 'Enter employee ID number',
                    name: 'EmployeeID'
                },
                {
                    type: 'input',
                    message: 'Enter thier managers ID',
                    name: 'ManagerID'
                }
                
            ])
            .then(function (response) {
                connection.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
                [response.FirstName, response.LastName, response.EmployeeID, response.ManagerID]), function(err,response) {
                    if (err) throw err;
                    console.table(res);
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'choice',
                            message: 'select an option.',
                            choices: [
                                'Main Menu',
                                'Quit'
                            ]
                            
                        }
                      
                    ])
                   .then((answer) => {
                       switch (answer.choice){
                           case 'Main Menu':
                               start();
                               break;
                               case 'Quit':
                                   Quit();
                       }
                   })
                }
                
            })
        }
        
         // viewEmployees();
         menu()
 
      
        
  