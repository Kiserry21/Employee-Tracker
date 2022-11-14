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
            choices:["view employees", 
            "view all roles", 
            "view all departments", 
            "add a department", 
            "add a role", 
            "update an employee role", 
            "add employee", 
            "view all employees by manager",
            "remove departtment",
            "remove employee",
            "update employee managers",
            "view all employees by department",
            "view budget",
            "exit"]
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
        if(info.option==="view all employees by manager"){
            addEmployee()
        }
        if(info.option==="remove department"){
            addEmployee()
        }
        if(info.option==="remove employee"){
            addEmployee()
        }
        if(info.option==="update employee managers"){
            addEmployee()
        }
        if(info.option==="view all employees by department"){
            addEmployee()
        }
        if(info.option==="view budget"){
            addEmployee()
        }
        



        }) 
}  
        // employee function goes here
            function viewEmployees(){ 
                const request = "SELECT employee.*, role.title, role.salary, department.name FROM employee join role on employee.role_id=role.id join department on role.department_id=department.id";
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
        //view all employees by manager function goes here
            function viewAllEmployeesByManager() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("View All Employees By Manager");
                    console.table(res);
                    menu()
                })
        }
        // remove repartment function goes here
            function removeDepartment() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("remove department");
                    console.table(res);
                    menu()
                })
        }
        // remove employee function goes here
            function removeEmployee() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("remove employee");
                    console.table(res);
                    menu()
                })
        }
        // update employee managers function goes here
            function updateEmployeeManagers() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("update employee managers");
                    console.table(res);
                    menu()
                })
        }
        // view all employees by department function goes here
            function viewAllEmployeesByDepartment() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("view all employees by department");
                    console.table(res);
                    menu()
                })
        }
        // view budget function goes here
            function viewBudget() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("view budget");
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
 
      
        
  