DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    department_id INT AUTO_INCREMENT,
    roles VARCHAR(25),
    PRIMARY KEY (department_id)
);

INSERT INTO department(role)
VALUES ("Visual"), 
("Marketing"), 
("sales"), 
("Engineering");

CREATE TABLE role (
role_id INT AUTO_INCREMENT,
title VARCHAR(25),
salary DECIMAL(10.3),
department_id INT,
PRIMARY KEy (role_id)
);

INSERT INTO role(title, salary, department_id)
VALUES ("Lead Engineer", 40000, 1),
 ("civil Engineer", 25000, 1), 
 ("Sales Lead", 300000, 2), 
 ("Salesperson", 70000, 2), 
 ("Marketing Team Lead", 300000, 3), 
 ("Advertiser", 170000, 3), 
 ("Visual Manager", 125000, 4);

CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(25),
last_name VARCHAR(25),
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (id)
);
