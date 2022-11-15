DROP DATABASE IF EXISTS employeesDB;

CREATE DATABASE employeesDB;

USE employeesDB;

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS job;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
     
    name VARCHAR(25)
     
);


CREATE TABLE role (
id INT AUTO_INCREMENT PRIMARY KEy,
title VARCHAR(25),
salary DECIMAL(10.3),
department_id INT,
foreign key(department_id) references department(id)
);



CREATE TABLE employee (
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(25),
last_name VARCHAR(25),
role_id INT NULL,
manager_id INT NULL, 
foreign key(role_id) references role(id),
foreign key(manager_id) references employee(id)
);

CREATE TABLE managers (
manager_id INT AUTO_INCREMENT,
manager VARCHAR(25),
PRIMARY KEY (manager_id)
);


