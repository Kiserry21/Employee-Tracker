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
            choices:["view employee", "view all roles", "view all departments", "add a department", "add a role", "update an employee role", "add employee", "exit"]
        }
    )
    .then(function(info) {
        console.log(info)
        if(info.option==="view employee"){
            // employee function goes here


        }
        if(info.option==="view all roles"){
            // all roles function goes here
            
        }

        if(info.option==="view all departments"){
            //all departments function goes here
        }

        if(info.option==="add a department"){
            //add a department function goes here
        }

        if(info.option==="add a role"){
            //add a role function goes here
        }

        if(info.option==="update an employee role"){
            //update an employee role function goes here
        }

        if(info.option==="add employee"){
            //add employee function goes here
        }

    })
}
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