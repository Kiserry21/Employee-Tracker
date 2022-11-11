USE employeesDB;

INSERT INTO department(role)
VALUES ("Visual"), 
("Marketing"), 
("sales"), 
("Engineering");

INSERT INTO role(title, salary, department_id)
VALUES ("Lead Engineer", 40000, 1),
 ("civil Engineer", 25000, 1), 
 ("Sales Lead", 300000, 2), 
 ("Salesperson", 70000, 2), 
 ("Marketing Team Lead", 300000, 3), 
 ("Advertiser", 170000, 3), 
 ("Visual Manager", 125000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Will", "Smith", 1, null), 
("James", "King", 2, 1), 
("Judy", "Thomas", 3, null),
 ("Mike", "Fred", 4, 4), 
 ("April", "Aitiken", 2, 1), 
 ("Gabe", "Radi", 6, 7), 
 ("Yumi", "Yam", 3, null),
  ("Harvey", "Steve", 5, null); 


NSERT INTO managers(manager)
VALUES("Will Smith"), ("Judy Thomas"), ("Harvey Steve");


SELECT * FROM employee;
SELECT * FROM managers;