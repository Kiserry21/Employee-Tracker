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


CREATE TABLE role (
role_id INT AUTO_INCREMENT,
title VARCHAR(25),
salary DECIMAL(10.3),
department_id INT,
PRIMARY KEy (role_id)
);



CREATE TABLE employee (
id INT AUTO_INCREMENT,
first_name VARCHAR(25),
last_name VARCHAR(25),
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (id)
);

CREATE TABLE managers (
manager_id INT AUTO_INCREMENT,
manager VARCHAR(25),
PRIMARY KEY (manager_id)
);
