//Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTables = require("console.table");

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
  password: "password",
  database: "employeesDB",
});

// function to insert employees into an array after retrieving them from the database
const getEmployee = () => {
    connection.query(
      `SELECT first_name, last_name, id FROM employee`,
      (err, res) => {
        if (err) throw err;
        employees = [];
        for (let i = 0; i < res.length; i++) {
          const id = res[i].id;
          const firstName = res[i].first_name;
          const lastName = res[i].last_name;
          var newEmployees = {
            name: firstName.concat(" ", lastName),
            value: id,
          };
          employees.push(newEmployees);
        }
        return employees;
      }
    );
  };