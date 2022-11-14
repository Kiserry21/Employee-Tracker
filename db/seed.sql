USE employeesDB;

INSERT INTO department(name)
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
 ("April", "Aitken", 2, 1), 
 ("Gabe", "Radi", 5, 2), 
 ("Yumi", "Yam", 3, null),
  ("Harvey", "Steve", 5, null); 




SELECT * FROM employee;

