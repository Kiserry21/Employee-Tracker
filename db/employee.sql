DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department (
    department_id INT AUTO_INCREMENT,
    roles VARCHAR(25),
    PRIMARY KEY (department_id)
);