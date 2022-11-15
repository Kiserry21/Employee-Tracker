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
            "view all employee by manager",
            "remove department",
            "remove employee",
            "update employee managers",
            "view all employee by department",
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
        if(info.option==="view all employee by manager"){
            viewEmployeeManager()
        }
        if(info.option==="remove department"){
            removeDepartment()
        }
        if(info.option==="remove employee"){
            removeEmployee()
        }
        if(info.option==="remove role"){
            removeRole()
        }
        if(info.option==="update employee managers"){
            updateEmployeeManagers()
        }
        if(info.option==="view all employee by department"){
            viewEmployeeDepartment()
        }
        if(info.option==="view budget"){
           viewBudget()
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
        const addDepartment = () => {
            inquirer
              .prompt({
                type: "input",
                name: "department",
                message: "What department would you like to add?"
              })
              .then((answer) => {
                connection.query(`INSERT INTO department(role)
                VALUES("${answer.department}")`, (err, res) => {
                  if (err) throw err;
                  init();
                  menu()
                })
              })
          };
        
        //add a role function goes here
        const addRole = () => {
            inquirer
              .prompt([
                {
                type: "input",
                name: "role",
                message: "What role would you like to add?"
              },
              {
                type: "input",
                name: "salary",
                value: "What is their salary?"
              },
              {
                type: "list",
                name: "department",
                value: "What department does this role belong to?",
                choices: departments
              }
              ])
              .then((answer) => {
                connection.query(`INSERT INTO role(title, salary, department_id)
                VALUES("${answer.role}", ${answer.salary}, ${answer.department})`, (err, res) => {
                  if (err) throw err;
                  init();
                  menu()
                })
              })
          };
        
      //update an employee role function goes here
      const updateRole = () => {
        inquirer
          .prompt([
            {
              type: "list",
              name: "employee",
              message: "Whose role are we updating?",
              choices: employees,
            },
            {
              type: "list",
              name: "role",
              message: "What is his new role?",
              choices: roles,
            },
          ])
          .then((answer) => {
            connection.query(
              `UPDATE employee
        SET role_id = ${answer.role}
        WHERE id = ${answer.employee};`,
              (err, res) => {
                if (err) throw err;
                init();
                menu()
              }
            );
          });
      };
       
        //add employee function goes here
        function newEmployee() {
            console.log('oy')
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
                    inquirer.prompt
                        menu()
                            
                        }
                   
                })
                           
        //view all employees by manager function goes here
        const allEmployeeManagers = () => {
            inquirer
              .prompt({
                type: "list",
                name: "manager",
                message: "choose a manager?",
                choices: managers,
              })
              .then((answer) => {
                connection.query(
                  `SELECT first_name, last_name FROM employee
                WHERE manager_id = ${answer.manager};`,
                  (err, res) => {
                    if (err) throw err;
                    console.table(res);
                    init();
                    menu()
                  }
                );
              });
            }
        
        // remove department function goes here
        const removeDepartment = () => {
            inquirer
              .prompt({
                type: "list",
                name: "department",
                message: "Who would you like to remove?",
                choices: departments,
              })
              .then((answer) => {
                connection.query(
                  `DELETE FROM department WHERE id=${answer.department}`,
                  (err, res) => {
                    if (err) throw err;
                    init();
                  }
                );
                console.log(answer);
                menu()
              });
          };
        // remove employee function goes here
        const removeEmployee = () => {
            inquirer
              .prompt({
                type: "list",
                name: "employee",
                message: "Who would you like to remove?",
                choices: employees,
              })
              .then((answer) => {
                connection.query(
                  `DELETE FROM employee WHERE id=${answer.employee}`,
                  (err, res) => {
                    if (err) throw err;
                    init();
                  }
                );
                console.log(answer);
                menu()
              });
          };
        const removeRole = () => {
            inquirer
              .prompt({
                type: "list",
                name: "role",
                message: "what role would you like to remove?",
                choices: roles,
              })
              .then((answer) => {
                connection.query(
                  `DELETE FROM roles WHERE id=${answer.role}`,
                  (err, res) => {
                    if (err) throw err;
                    init();
                  }
                );
                console.log(answer);
                menu()
              });
          };
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
            //function viewAllEmployeeByDepartment() {
                const request = "SELECT * FROM department";
                db.query(request, function(err, res) {
                    if (err) throw err;
                    console.log("view all employees by department");
                    console.table(res);
                    menu()
                })
        }
        // view budget function goes here
        const viewBudget = () => {
            connection.query(`SELECT salary 
            FROM employee
            JOIN role ON employee.role_id = role.role_id 
            JOIN department ON role.department_id = department.department_id
            LEFT JOIN managers on employee.manager_id = managers.manager_id`, (err, res) => {
              if (err) throw err;
              console.log(res);
              var budget = [];
              for (let i = 0; i < res.length; i++) {
                const addBudget = res[i].salary;
                budget.push(addBudget)
              }
              var sum = budget.reduce(function(a, b){
                return a + b;
              }, 0);
              console.log("TOTAL BUDGET")
              console.log(sum)
              init();
              
            })
          }
  
       
        
          function Quit() {
            console.log('Goodbye!');
            process.exit();
            
        }
      
        
  